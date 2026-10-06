# Namecheck

**A local filename preflight before you attach files in Gmail, WeChat, Slack, Google Drive, or another upload flow.**

Drop files or paste one filename per line. Namecheck reads names only—never file content—and flags invisible Unicode, normalized duplicates, path characters, trailing spaces/dots, executable or double extensions, and missing extensions.

## Why

File transfer tools ask you to select first and inspect later. A duplicate or misleading attachment name can create confusion precisely when a handoff is rushed. Namecheck is a tiny local checkpoint before you upload.

## Use

Open the [live app](https://zcxikingstar-ship-it.github.io/namecheck/) or open `index.html` locally. Drop files or paste names, inspect the report, then use your normal app deliberately.

## Limits

- Names only: no content, MIME type, hashes, or malware scanning.
- It cannot decide whether a file is trustworthy or appropriate to share.
- It does not upload, rename, send, or change files.

## Development

```sh
npm run check
npm test
```

MIT licensed. Report security issues through GitHub Security Advisories without attaching sensitive files.
