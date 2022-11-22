### Impexwood homepage

```bash
npm i           # install node modules
npm run dev     # run the app
npm run build   # build the app
```

### references
```jsx
// for loop over a range
{[...Array(4)].map((x, i) => (
  <div  key={i}>content</div>
))}

// css inside the component
<style jsx>
{`
  .some-class {
    margin: 120px 0px;
  }
`}
</style>

// tailwind class calling root variables example
bg-[color:var(--bg-light-select);]
```