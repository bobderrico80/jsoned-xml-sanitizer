# JSON-ed XML Sanitizer

A CLI command that takes JSON-wrapped XML as `stdin` and outputs to `stdout` plain, sanitized XML.

## Example usage

```
echo '"<p class=\"foo\">\nFoo\n</p>"' | jxs
<p class="foo">Foo</p>
```

## Local installation

1. Clone this repo
2. Within the root of the project, run `npm link`
3. The command `jxs` should now be available
