# DACdb Brand 

## HTML

### Typeface links

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- DACdb Logos and trademarks use "Lato Book 700" -->
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700;900&display=swap" rel="stylesheet">
<!-- General text and headlines use "Roboto Mono" -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap">
```

### Code

```html
<span class="dacdb-brand">DACdb<span> Plus</span></span>
```

## CSS

```css
.dacdb-brand {
  /* Custom font for "DACdb Plus" */
  font-family: "Lato", sans-serif;
  font-weight: 900;
  color: #11284b;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5); /* Add a subtle drop shadow */
}
.dacdb-brand span {
  text-transform: uppercase;
  display: inline-block;
  color: #92182c;
}
```
