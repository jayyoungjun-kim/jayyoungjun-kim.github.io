CREATE TABLE drafts (
  page TEXT PRIMARY KEY,
  owner TEXT NOT NULL,
  base_sha TEXT,
  source TEXT NOT NULL,
  revision INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL
);
CREATE TABLE audit_log (
  id TEXT PRIMARY KEY,
  actor TEXT NOT NULL,
  page TEXT NOT NULL,
  commit_sha TEXT NOT NULL,
  action TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX audit_by_time ON audit_log(created_at DESC);
