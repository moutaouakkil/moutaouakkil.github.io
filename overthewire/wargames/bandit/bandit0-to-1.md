---
layout: page
title: "Bandit Level 0 to 1"
date: 2024-10-08
categories: [overthewire, wargames, bandit]
tags: [linux, ssh, file-reading]
permalink: /overthewire/wargames/bandit/bandit0-to-1
---

# Bandit Level 0 to 1

## Level Goal

The password for the next level is stored in a file called `readme` located in the home directory. Use this password to log into `bandit1` using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.

## Solution

1. First, we need to connect to the server:

   ```bash
   ssh bandit0@bandit.labs.overthewire.org -p 2220
   ```

2. Once connected, we can list the contents of the home directory:

   ```bash
   ls
   ```

3. We see a file named `readme`. Let's view its contents:

   ```bash
   cat readme
   ```

4. The password for the next level is displayed.

## Learned Skills

- Basic SSH usage
- Navigation in a Linux file system
- Using the `cat` command to view file contents

## Reflection

This level introduces the basics of connecting to a remote server using SSH and navigating the Linux file system. It's a fundamental skill in cybersecurity, as many systems and challenges require SSH access. The use of the `cat` command to read file contents is also a crucial skill, often used in both CTF challenges and real-world scenarios.

## Next Steps

With the password obtained, we can now proceed to the next level, Bandit 1. Remember to use the new password when connecting:

```bash
ssh bandit1@bandit.labs.overthewire.org -p 2220
```