# 🐝 Contributing to Hyperfocus Zone

We welcome all builds, tools, and experiments from the neurospicy community!

## 🚀 How to Submit Your Build

You don't need to know React or Next.js to contribute. You just need to edit a single text file.

### Step 1: Fork the Repo
Click the **Fork** button in the top-right corner of this repository to create your own copy.

### Step 2: Add Your Build Data
Open the file `data/builds.json`. You will see a list of builds like this:

```json
{
  "id": "my-cool-project",
  "title": "My Cool Project 🚀",
  "description": "A brief description of what it does.",
  "status": "LIVE",
  "tags": ["AI", "Tool"],
  "demo_url": "https://my-project.com",
  "source_url": "https://github.com/username/my-project",
  "image": "https://placehold.co/600x400",
  "author": "YourHandle"
}
```

**Copy** one of the existing blocks and **paste** it at the end of the `builds` list (make sure to add a comma `,` after the previous item!).

### Field Guide

| Field | Description | Example |
| :--- | :--- | :--- |
| `id` | Unique slug for your project | `"neon-snake"` |
| `title` | Project name (emojis welcome) | `"Neon Snake 🐍"` |
| `description` | Short summary (1-2 sentences) | `"A cyberpunk snake game..."` |
| `status` | Current state | `"LIVE"`, `"BETA"`, or `"WIP"` |
| `tags` | Tech or category keywords | `["Game", "Canvas"]` |
| `demo_url` | Link to the live app | `"https://..."` |
| `source_url` | Link to the code | `"https://github.com/..."` |
| `image` | URL to a screenshot (600x400 preferred) | `"/images/my-game.png"` |
| `author` | Your GitHub handle or name | `"PixelNinja"` |

### Step 3: Add Your Image (Optional)
If you have a screenshot:
1.  Save it as `public/images/your-project-id.png`.
2.  Update the `image` field in JSON to `"/images/your-project-id.png"`.

### Step 4: Open a Pull Request
1.  Commit your changes: `git commit -m "Add My Cool Project"`
2.  Push to your fork.
3.  Go to the original repository and click **"New Pull Request"**.

Once we merge it, your build will go live automatically! 🐝
