ALTER TABLE drafts ADD COLUMN draft_id TEXT;
UPDATE drafts SET draft_id = lower(hex(randomblob(16))) WHERE draft_id IS NULL;
