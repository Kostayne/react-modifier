## Changes
ModifiableComponent now can receive optional state type.

example: 
``` ts
interface TestComponentState {
    testField: string;
    testFieldTwo: number;
}

// if no state
class TestComponent extends ModifiableComponent<TestComponentTheme, TestComponentProps> {
    // realization
}

// if using state
class TestComponent extends ModifiableComponent<TestComponentTheme, TestComponentProps, TestComponentState> {
    // realization
}
```

:octocat: Sources in [github](https://github.com/Kostayne/react-modifier)