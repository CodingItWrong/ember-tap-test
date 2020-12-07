# tap-test

Demonstrates that when a button is tapped and replaced by another button by Ember, the new button retains the active state.

## Running

* `ember serve`
* Open app on iPhone or in iOS Simulator
* Tap any button A-C
* Buttons are replaced by D-F.
* Expected behavior: none of the buttons will have an active state, because none of these buttons has been tapped.
* Actual behavior: the button in the same position as the one you tapped is darkened. This is the CSS applied to the active state.

## Relevant Code

`components/tap-sample.hbs`

```hbs
{{#if this.flag}}
  <button type="button" class="btn btn-light">
    D
  </button>
  <button type="button" class="btn btn-light">
    E
  </button>
  <button type="button" class="btn btn-light">
    F
  </button>
{{else}}
  <button type="button" {{on "click" this.setFlag}} class="btn btn-light">
    A
  </button>
  <button type="button" {{on "click" this.setFlag}} class="btn btn-light">
    B
  </button>
  <button type="button" {{on "click" this.setFlag}} class="btn btn-light">
    C
  </button>
{{/if}}
```

Note that from the standpoint of the template we are not reusing a button; we are replacing a list of three buttons with three different buttons. But at runtime it seems like the active state of the previous set of buttons is preserved.
