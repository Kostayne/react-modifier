## Changes
createModifier now has all optional arguments.
removedModifyWithPrioritet function
improved work with id while modifying
added more tests

example: 
``` ts
import * as RM from "react-modifier";

const mod = RM.createModifier(); // { className: "", id: "" }
```

:octocat: Sources in [github](https://github.com/Kostayne/react-modifier)