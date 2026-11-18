Clear screen like Unix in Windows Command prompt.

▌
🖥️ [Command prompt](https://www.npmjs.com/package/clear.cmd),
📜 [Files](https://unpkg.com/clear.cmd/),

<br>

[clear] (similar to `cls` in Windows [Command prompt]) is a [builtin shell command]
in various Unix shells (such as [bash]), which **clears the terminal** by
*scrolling down* (until old output is not visible) and *resetting the cursor* to the
top-left corner of the screen. This package provides the same behaviour as Unix
`clear` (as mentioned above) on the *Windows Command prompt*. [Source code] for the
executable is written in `C#`.

[clear]: https://en.wikipedia.org/wiki/Clear_(Unix)
[Command prompt]: https://en.wikipedia.org/wiki/Cmd.exe
[builtin shell command]: https://en.wikipedia.org/wiki/Shell_builtin
[bash]: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[Source code]: src/cs


<br>

```bash
# Install on Windows
$ npm install -g clear.cmd
```

<br>

```bash
# Push screen text to the top, reset cursor.
$ clear
```

<br>
<br>


## References:

- [clear (Unix)][clear]

<br>
<br>


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/clear.cmd)
