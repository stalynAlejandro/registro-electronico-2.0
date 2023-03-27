# Registro electronico 2.0

## Material UI - Fundamentals

Material UI is a open-source React component library that implements Google's Material Design.

It includes prebuilt components that are ready for use in production right out of the box.

Material UI is beautiful by desing and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

### Material UI vs MUI Base

Material UI and MUI Base feature many of the same UI components, but MUI Base comes without any default styles or styling solutions.

Material UI is a comprehensive in that it comes packaged with default styles, and is optimized to work with _Emotions_ or _styled-components_.

MUI Base, by contrast, could be considered the "skeletal" or "headless" counterpart to Material UI - in fact, future versions of **Material** UI will use **MUI Base** components and hook for its fundamental structure.

### Globals

Since Material UI components are built to function in isolation, they don't require any kind of globally scoped styles. We recommend adding the following globals.

To ensure proper rendering and touch zooming for all devices, add the responsive viewport to `head` element:

```
<meta name="viewport" content="initial-scale=1, width=device-width"/>
```

**CssBaseline**. Optional component. It fixes some inconsistencies across browsers and devices while providing resets that are better tailored to fit Material UI than alternative global style sheets like _normalize.css_.

**Default Font**. MUI uses Roboto font by default.

### When should I use inline-style vs CSS?

As a rule of thumb, only use _inline-styles_ for dynamic style properties. The CSS alternative provides more advantages, such as:

-   auto-prefixing
-   better debugging
-   media queries
-   keyframes

### Routing Libraries - How do I use react-router?

There are two main components available to perform navigations. The most common one is the _Link_ as its name might suggest. It renders a native _<a>_ element and applies the _href_ as an attribute.

```js
<Link href="/">Link</Link>
```

You can also make a button perform navigation actions. If your component is extending `ButtonBase`, providing a `href` prop enables the link mode.

```js
<Button href="/" variant="contained">
    Link
</Button>
```

### Global theme Link

The theme of MUI allows configuring this component once.

For instance, with react-router:

```js
import { LinkProps } from '@mui/material/Link';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

const LinkBehaviour = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & {href: RouterLinkProps['to']}>((props,ref) => {
    const {href, ...other} = props;
    //  Map href (MUI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
    components:{
        MuiLink:{
            defaultProps:{
                component: LinkBehaviour,
            } as LinkProps
        },
        MuiButtonBase:{
            defaultProps:{
                LinkComponent: LinkBehaviour,
            }
        }
    }
})

// This aproach as limitations with typescript. The `href` prop only accepts
// a string. In the event you need to provide a richer structure, see the
// next section.
```

### How do I access the DOM element?

All MUI components that should render something in the DOM foward their ref to the underlying DOM component. This means that you can get DOM elements by reading the ref attached to MUI components.

```js
//  create
const ref = React.createRef();

//  render
<Button ref={ref} />;

//  usage
const element = ref.current;

// Note: The ref is forwarded to the root element
```

### What's the clsx dependency for?

`clsx` is a tiny utility for constructiong `className` strings conditionally, out of an object with keys being the class strings, and values being booleans.

Instead of writing:

```js
//  let disbaled = false, selected = true;

return (
    <div
        className={`MuiButton-root ${disabled} ? 'Mui-disabled' : '' } ${
            selected ? 'Mui-selected' : ''
        }`}
    />
);
```

you can do:

```js
return (
    <div
        className={clsx('MuiButton-root', {
            'Mui-disabled': disabled,
            'Mui-selected': selected,
        })}
    />
);
```

# Layout

## Box

Serves as a wrapper component for most of the CSS utility needs.

The Box component packages _all the style functions_ that are exposed in `@mui/system`.

The `sx` prop. All system properties are available via the `sx` prop. In addition, the `sx` prop allows you to specify any other CSS rules you may need. Here's an example of how you can use it:

```js
import * as React from 'react;
import Box from '@mui/material/Box';

export default function BoxSx(){
    return(
        <Box
            sx={{
                width:300,
                height:300,
                backgroundColor:'primary.dark',
                '&:hover':{
                    backgroundColor:'primary.main',
                    opacity:[0.9, 0.8, 0.8]
                }
            }}
         />
    )
}

```

### Overriding MUI components

The Box component wraps your components. It creates a new DOM element, `<div>` that by default can be changed the `component` prop. Let's say you want to use a `<span>` instead:

```js
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
    return (
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
            <Button>Save</Button>
        </Box>
    );
}
```

This works great when the changes can be isolated to a new DOM element. For instance, you can change the margin this way.

However, sometimes you have to target the underlying DOM element. As an example, you may want to change the border of the Button.

The Button component defines its own styles. CSS inheritance doesn't help. To workaround the problem, you can use the `sx` prop directly on the child if it is a MUI component.

```js
<Button sx={{ border: '1px dashed grey' }}>Save</Button>
```

For non-MUI components, use the `component` prop.

```js
<Box component="button" sx={{ border: '1px dashed grey' }}>
    Save
</Box>
```

### System props

As a CSS utility component, the `Box` also supports all `system` properties. You can use them as prop directly on the component. For instance, a margin-top.

```js
<Box mt={2}>
```

### Box API

Props of the native component are:

-   **component**. _elementType_. The component used for the root node. Either a string to use a HTML element or a component.

-   **sx**. _Array<func | object | bool> | func | object_. The system prop that allows defining system overrides as well as additional CSS styles.

As a CSS utiliy, the Box component also supports all `system` properties. You can use them as props directly on the component.

The `ref` is forwarded to the root element.

## Container

Centers your content horizontally. It's the most basic layout element. While containers can be nested, most layouts do not require a nested container.

### Fluid

A fluid container width is bounded by the `maxWidth` prop value.

```js
<Container maxWidth="sm">
    <Box sx={{bgcolor:'blue' height:'100vh'}}>
</Container>
```

### Fixed

If you prefer to design for a fixed set of sizes instead of trying to accomodate a fully fluid viewport, you can set the `fixed` prop. The `max-width` matches the `min-width` of the current breakpoint.

```js
<Container fixed>
    <Box sx={{bgcolor:'blue' height:'100vh'}}>
</Container>
```
