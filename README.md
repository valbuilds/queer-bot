<h1 align="center">This project has been moved.</h1>
<h2 align="center">The new repository is <a href="https://github.com/violetbuilds/qbot/">here</a></h2>
<hr>
<h1 align="center">Hi! I'm Queer Bot.</h1>
<h2 align="center">I can help in the most silly situations.</h2>
<hr>

### Hosting the bot

#### Pre-requisites
* Node.js version 18
* Some dependencies that you'll install in the steps below.

#### How-to
1. Clone this repository.
```
git clone https://github.com/katiebuilder/queer-bot.git
```
2. Check your Node.js version. Run this command in the terminal to do so:
```
node -v
```
> If the output starts with `v18`, you're good to go, if else, upgrade/download Node.js.
3. Download the required dependencies.
> If you're able to use npm, run the command below. It'll install Discord.js, the voice module of Discord.js, and FFmpeg.
```
npm -i discord.js @discordjs/voice ffmpeg
```
4. Initialise the project by running this in the terminal:
```
node init
```
5. Just spam enter until you can run more commands, it should already be filled out for you.
6. Edit config_ex.json

If you're using a GNU based system, you can use `nano` to do this.

> Remember to be in the directory that was created when you cloned the repo in step 1.

```
nano config_ex.json
```
If you're using `nano`, I reccommend that you copy and paste config_ex.json to a seperate area to fill it out.

> Remember that leaving a single input blank will cause the bot to not work.

Exit nano by doing `CTRL+O`.

**Make sure to rename `config_ex.json` to `config.json`.**

7. Deploy the slash commands.

This bot uses __slash commands__. So, for Discord to see said slash commands we have to run a seperate script.

Run:
```
node deploy.js
```

The terminal should output "`Successfully reloaded 15 (/) commands.`" *note: this number will go up if you have a newer version of the code.*

8. Start the bot.

Simple. Just run:
```
node .
```

> If you changed the "main" part of package.json, do this:
> ```
> node index.js
> ```

:tada: The bot should work with all its sill features!
Feel free to edit any bits of code you want. (Just remember to follow the license.)
> Note: Some files are easy edits, they are listed in [EASYEDITS.md](https://github.com/katiebuilder/queer-bot/blob/main/EASYEDITS.md)

<hr>

### License

This work is licensed under v1.1 of the Opinionated Queer License, read [LICENSE.md](https://github.com/katiebuilder/queer-bot/blob/main/LICENSE.md) for more.

<hr>

### Contributing
To contribute to this project, simply [open a pull request](https://github.com/katiebuilder/queer-bot/pulls).

<hr>

### Credits

[@katiebuilder](https://github.com/katiebuilder) - Creator & main upkeeper

!-> |nvitation <-! - Allowing the use of their name/profile picture in `/olivia`.

[@CoookieMB](https://github.com/CoookieMB) - Motivation
