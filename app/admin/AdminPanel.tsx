"use client";

import { useCallback, useState } from "react";

import {
  ACHIEVEMENT_GROUPS,
  WRITING_CATEGORIES,
  type Achievement,
  type Writing,
} from "@/lib/cms/types";

type Tab = "achievements" | "writings";
type Notice = { type: "success" | "error"; text: string } | null;

interface AdminPanelProps {
  initialAuthenticated: boolean;
  configured: boolean;
  initialAchievements: Achievement[];
  initialWritings: Writing[];
}

function newAchievement(): Achievement {
  return {
    id: `ach-${Date.now()}`,
    groups: ["lunar"],
    title: "",
    category: "",
    date: "",
    result: "",
    organizer: "",
    location: "",
    summary: "",
    description: "",
    images: [],
  };
}

function newWriting(): Writing {
  return {
    id: `writing-${Date.now()}`,
    title: "",
    slug: "",
    category: "Article",
    language: "English",
    published: new Date().toISOString().slice(0, 10),
    updated: "",
    featured: false,
    cover: "",
    summary: "",
    background: "",
    dedication: "",
    topics: [],
    keywords: [],
    content: "",
  };
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </span>
      {children}
      {hint && <span className="block text-xs text-slate-500 mt-1">{hint}</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100";

export default function AdminPanel({
  initialAuthenticated,
  configured,
  initialAchievements,
  initialWritings,
}: AdminPanelProps) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<Tab>("achievements");
  const [achievements, setAchievements] =
    useState<Achievement[]>(initialAchievements);
  const [writings, setWritings] = useState<Writing[]>(initialWritings);
  const [editingAchievement, setEditingAchievement] =
    useState<Achievement | null>(null);
  const [editingWriting, setEditingWriting] = useState<Writing | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);

  const notify = useCallback((type: "success" | "error", text: string) => {
    setNotice({ type, text });
    window.setTimeout(() => setNotice(null), 5000);
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [aRes, wRes] = await Promise.all([
        fetch("/api/cms/achievements"),
        fetch("/api/cms/writings"),
      ]);
      if (!aRes.ok || !wRes.ok) throw new Error("Could not load content.");
      setAchievements(await aRes.json());
      setWritings(await wRes.json());
    } catch (error) {
      notify("error", (error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [notify]);

  async function login(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/cms/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Sign in failed.");
      }
      setAuthenticated(true);
      setPassword("");
      await loadData();
    } catch (error) {
      notify("error", (error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await fetch("/api/cms/auth", { method: "DELETE" });
    setAuthenticated(false);
    setAchievements([]);
    setWritings([]);
  }

  async function saveCollection(which: Tab) {
    setSaving(true);
    try {
      const response = await fetch(`/api/cms/${which}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(which === "achievements" ? achievements : writings),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Save failed.");
      }
      notify(
        "success",
        "Saved. The live site will update after Vercel finishes rebuilding."
      );
    } catch (error) {
      notify("error", (error as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function uploadImage(file: File, onUrl: (url: string) => void) {
    const body = new FormData();
    body.append("file", file);
    try {
      const response = await fetch("/api/cms/upload", {
        method: "POST",
        body,
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Upload failed.");
      }
      const data = await response.json();
      onUrl(data.url);
      notify("success", "Image uploaded.");
    } catch (error) {
      notify("error", (error as Error).message);
    }
  }

  if (!configured) {
    return (
      <main className="min-h-screen bg-stone-100 flex items-center justify-center p-6">
        <div className="max-w-md rounded-2xl bg-white p-8 shadow text-center">
          <h1 className="text-xl font-bold text-slate-900">
            CMS is not configured
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Set <code>ADMIN_PASSWORD</code>, <code>SESSION_SECRET</code> and{" "}
            <code>CMS_GITHUB_TOKEN</code> in your environment variables, then
            redeploy.
          </p>
        </div>
      </main>
    );
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-stone-100 flex items-center justify-center p-6">
        {notice && (
          <div
            className={`fixed top-4 left-1/2 -translate-x-1/2 rounded-lg px-4 py-2 text-sm shadow ${
              notice.type === "error"
                ? "bg-red-600 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            {notice.text}
          </div>
        )}
        <form
          onSubmit={login}
          className="w-full max-w-sm rounded-2xl bg-white p-8 shadow"
        >
          <h1 className="text-2xl font-bold text-slate-900">Portfolio CMS</h1>
          <p className="mt-1 text-sm text-slate-500">Sign in to edit content.</p>
          <div className="mt-6">
            <Field label="Password">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
                autoFocus
                required
              />
            </Field>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100">
      {notice && (
        <div
          className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-lg px-4 py-2 text-sm shadow ${
            notice.type === "error"
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {notice.text}
        </div>
      )}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Portfolio CMS</h1>
            <p className="text-xs text-slate-500">
              Edits are committed to GitHub and trigger a Vercel rebuild.
            </p>
          </div>
          <button
            onClick={logout}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-6 flex gap-2">
          {(["achievements", "writings"] as Tab[]).map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`rounded-lg px-4 py-2 text-sm font-medium capitalize ${
                tab === item
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700 border border-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-sm text-slate-500">Loading…</p>
        ) : tab === "achievements" ? (
          <AchievementsEditor
            items={achievements}
            onChange={setAchievements}
            onSave={() => saveCollection("achievements")}
            setEditing={setEditingAchievement}
            saving={saving}
          />
        ) : (
          <WritingsEditor
            items={writings}
            onChange={setWritings}
            onSave={() => saveCollection("writings")}
            setEditing={setEditingWriting}
            saving={saving}
          />
        )}
      </div>

      {editingAchievement && (
        <AchievementModal
          value={editingAchievement}
          onChange={(updated) => {
            setEditingAchievement(updated);
            setAchievements((prev) =>
              prev.some((item) => item.id === updated.id)
                ? prev.map((item) =>
                    item.id === updated.id ? updated : item
                  )
                : [...prev, updated]
            );
          }}
          onClose={() => setEditingAchievement(null)}
          uploadImage={uploadImage}
        />
      )}
      {editingWriting && (
        <WritingModal
          value={editingWriting}
          onChange={(updated) => {
            setEditingWriting(updated);
            setWritings((prev) =>
              prev.some((item) => item.id === updated.id)
                ? prev.map((item) =>
                    item.id === updated.id ? updated : item
                  )
                : [...prev, updated]
            );
          }}
          onClose={() => setEditingWriting(null)}
          uploadImage={uploadImage}
        />
      )}
    </main>
  );
}

type UploadFn = (file: File, onUrl: (url: string) => void) => Promise<void>;

function AchievementsEditor({
  items,
  onChange,
  onSave,
  setEditing,
  saving,
}: {
  items: Achievement[];
  onChange: (items: Achievement[]) => void;
  onSave: () => void;
  setEditing: (item: Achievement | null) => void;
  saving: boolean;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={() => setEditing(newAchievement())}
          className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-yellow-400"
        >
          + Add achievement
        </button>
        <button
          onClick={onSave}
          disabled={saving}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
        <span className="text-xs text-slate-500">{items.length} total</span>
      </div>

      <div className="space-y-6">
        {ACHIEVEMENT_GROUPS.map((group) => {
          const groupItems = items.filter((item) =>
            item.groups.includes(group.id)
          );
          if (!groupItems.length) return null;
          return (
            <div key={group.id} className="rounded-xl bg-white p-5 shadow">
              <h2 className="mb-3 font-semibold text-slate-900">
                {group.label}
              </h2>
              <ul className="divide-y divide-slate-100">
                {groupItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {item.title || "(untitled)"}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {item.category} · {item.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditing(item)}
                        className="rounded border border-slate-300 px-2 py-1 text-xs text-slate-700 hover:bg-slate-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          onChange(items.filter((i) => i.id !== item.id))
                        }
                        className="rounded border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/50 p-6">
      <div className="my-4 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-slate-100"
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function AchievementModal({
  value,
  onChange,
  onClose,
  uploadImage,
}: {
  value: Achievement;
  onChange: (value: Achievement) => void;
  onClose: () => void;
  uploadImage: UploadFn;
}) {
  const update = <K extends keyof Achievement>(key: K, val: Achievement[K]) =>
    onChange({ ...value, [key]: val });

  return (
    <Modal
      title={value.title ? `Edit: ${value.title}` : "New achievement"}
      onClose={onClose}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Title">
          <input
            className={inputClass}
            value={value.title}
            onChange={(e) => update("title", e.target.value)}
          />
        </Field>
        <Field label="Category">
          <input
            className={inputClass}
            value={value.category}
            onChange={(e) => update("category", e.target.value)}
          />
        </Field>
        <Field label="Date">
          <input
            className={inputClass}
            value={value.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </Field>
        <Field label="Result">
          <input
            className={inputClass}
            value={value.result}
            onChange={(e) => update("result", e.target.value)}
          />
        </Field>
        <Field label="Organizer">
          <input
            className={inputClass}
            value={value.organizer}
            onChange={(e) => update("organizer", e.target.value)}
          />
        </Field>
        <Field label="Location">
          <input
            className={inputClass}
            value={value.location}
            onChange={(e) => update("location", e.target.value)}
          />
        </Field>
      </div>

      <fieldset className="mt-4">
        <legend className="mb-2 text-sm font-medium text-slate-700">
          Show on pages
        </legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {ACHIEVEMENT_GROUPS.map((group) => (
            <label key={group.id} className="flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={value.groups.includes(group.id)}
                onChange={(e) =>
                  update(
                    "groups",
                    e.target.checked
                      ? [...value.groups, group.id]
                      : value.groups.filter((g) => g !== group.id)
                  )
                }
              />
              {group.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4 space-y-4">
        <Field label="Summary">
          <textarea
            className={inputClass}
            rows={2}
            value={value.summary}
            onChange={(e) => update("summary", e.target.value)}
          />
        </Field>
        <Field label="Description">
          <textarea
            className={inputClass}
            rows={4}
            value={value.description}
            onChange={(e) => update("description", e.target.value)}
          />
        </Field>
      </div>

      <ImageList
        images={value.images}
        onChange={(images) => update("images", images)}
        uploadImage={uploadImage}
      />
    </Modal>
  );
}

function ImageList({
  images,
  onChange,
  uploadImage,
}: {
  images: string[];
  onChange: (images: string[]) => void;
  uploadImage: UploadFn;
}) {
  return (
    <div className="mt-4">
      <span className="block text-sm font-medium text-slate-700 mb-2">
        Images
      </span>
      {images.map((image, index) => (
        <div key={index} className="mb-2 flex gap-2">
          <input
            className={inputClass}
            value={image}
            placeholder="/journey/example.jpg"
            onChange={(e) => {
              const next = [...images];
              next[index] = e.target.value;
              onChange(next);
            }}
          />
          <button
            onClick={() => onChange(images.filter((_, i) => i !== index))}
            className="rounded-lg border border-red-200 px-3 text-sm text-red-600 hover:bg-red-50"
          >
            ×
          </button>
        </div>
      ))}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange([...images, ""])}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          + Add image path
        </button>
        <label className="cursor-pointer rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
          Upload image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file)
                uploadImage(file, (url) => onChange([...images, url]));
              e.target.value = "";
            }}
          />
        </label>
      </div>
    </div>
  );
}

function WritingsEditor({
  items,
  onChange,
  onSave,
  setEditing,
  saving,
}: {
  items: Writing[];
  onChange: (items: Writing[]) => void;
  onSave: () => void;
  setEditing: (item: Writing | null) => void;
  saving: boolean;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={() => setEditing(newWriting())}
          className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-yellow-400"
        >
          + Add writing
        </button>
        <button
          onClick={onSave}
          disabled={saving}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
        <span className="text-xs text-slate-500">{items.length} total</span>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <ul className="divide-y divide-slate-100">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between px-5 py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-900">
                  {item.title || "(untitled)"}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {item.category} · {item.published}
                  {item.featured && " · Featured"}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditing(item)}
                  className="rounded border border-slate-300 px-2 py-1 text-xs text-slate-700 hover:bg-slate-50"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    onChange(items.filter((i) => i.id !== item.id))
                  }
                  className="rounded border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WritingModal({
  value,
  onChange,
  onClose,
  uploadImage,
}: {
  value: Writing;
  onChange: (value: Writing) => void;
  onClose: () => void;
  uploadImage: UploadFn;
}) {
  const update = <K extends keyof Writing>(key: K, val: Writing[K]) =>
    onChange({ ...value, [key]: val });

  return (
    <Modal
      title={value.title ? `Edit: ${value.title}` : "New writing"}
      onClose={onClose}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Title">
          <input
            className={inputClass}
            value={value.title}
            onChange={(e) => update("title", e.target.value)}
          />
        </Field>
        <Field label="Slug" hint="Used in the public URL. Lowercase and hyphens.">
          <input
            className={inputClass}
            value={value.slug}
            onChange={(e) => update("slug", e.target.value)}
          />
        </Field>
        <Field label="Category">
          <select
            className={inputClass}
            value={value.category}
            onChange={(e) => update("category", e.target.value)}
          >
            {WRITING_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Language">
          <select
            className={inputClass}
            value={value.language}
            onChange={(e) => update("language", e.target.value)}
          >
            <option value="English">English</option>
            <option value="Nepali">Nepali</option>
          </select>
        </Field>
        <Field label="Published">
          <input
            className={inputClass}
            value={value.published}
            onChange={(e) => update("published", e.target.value)}
          />
        </Field>
        <Field label="Updated (optional)">
          <input
            className={inputClass}
            value={value.updated}
            onChange={(e) => update("updated", e.target.value)}
          />
        </Field>
      </div>

      <div className="mt-4 flex gap-6">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={value.featured}
            onChange={(e) => update("featured", e.target.checked)}
          />
          Featured (Editor&apos;s Picks)
        </label>
      </div>

      <div className="mt-4 space-y-4">
        <Field label="Summary">
          <textarea
            className={inputClass}
            rows={2}
            value={value.summary}
            onChange={(e) => update("summary", e.target.value)}
          />
        </Field>
        <Field label="Background">
          <textarea
            className={inputClass}
            rows={2}
            value={value.background}
            onChange={(e) => update("background", e.target.value)}
          />
        </Field>
        <Field label="Dedication">
          <input
            className={inputClass}
            value={value.dedication}
            onChange={(e) => update("dedication", e.target.value)}
          />
        </Field>
        <Field label="Topics" hint="Comma-separated.">
          <input
            className={inputClass}
            value={value.topics.join(", ")}
            onChange={(e) =>
              update(
                "topics",
                e.target.value
                  .split(",")
                  .map((v) => v.trim())
                  .filter(Boolean)
              )
            }
          />
        </Field>
        <Field label="Keywords" hint="Comma-separated.">
          <input
            className={inputClass}
            value={value.keywords.join(", ")}
            onChange={(e) =>
              update(
                "keywords",
                e.target.value
                  .split(",")
                  .map((v) => v.trim())
                  .filter(Boolean)
              )
            }
          />
        </Field>
        <Field label="Cover image">
          <div className="flex gap-2">
            <input
              className={inputClass}
              value={value.cover}
              placeholder="/writings/cover.jpg"
              onChange={(e) => update("cover", e.target.value)}
            />
            <label className="shrink-0 cursor-pointer rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
              Upload
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadImage(file, (url) => update("cover", url));
                  e.target.value = "";
                }}
              />
            </label>
          </div>
        </Field>
        <Field label="Content (Markdown)">
          <textarea
            className={`${inputClass} font-mono`}
            rows={18}
            value={value.content}
            onChange={(e) => update("content", e.target.value)}
          />
        </Field>
      </div>
    </Modal>
  );
}
