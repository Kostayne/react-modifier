## :warning: Interfaces
IModifier changed. Now id is required. It's caused javascript nature. If you not passing optional parametr declared in interface it will be undefined. Now it will be only string.

IModifiableProps id and theme swapped. Theme is required and id is optional. Why? Cause it allows you to create one render method.

## :hammer: Features
`getHeadModByProps` function added. It combines theme.head & mod. Or theme.head only.

## :fire: Result
### Before
``` tsx
if (theme) {
    return modifyElement((
        <div className="app">
            {modifyElement((
                <span className="app__text">
                    {text}
                </span>
            ), theme.textMod)}
        </div>
    ), mixModifiers(mod, theme.head));
}

return modifyElement((
    <div className="app">
        {modifyElement((
            <span className="app__text">{text}</span>
        ), theme.textMod)}
    </div>
), mod);
```

### AFTER
``` tsx
    const headMod = getHeadModByProps(props);

    return modifyElement((
        <div className="app">
            {modifyElement((
                <span className="app__text">
                    {text}
                </span>
            ), theme.textMod)}
        </div>
    ), headMod);
```

:octocat: Sources in [github](https://github.com/Kostayne/react-modifier)