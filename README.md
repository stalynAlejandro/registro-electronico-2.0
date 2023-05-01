# Registro electronico 2.0

![Screenshot from 2023-04-16 18-15-15](https://user-images.githubusercontent.com/66746179/232326002-52034336-28ff-40b6-9aa5-cf510d5bd533.png)

![Screenshot from 2023-04-18 14-05-15](https://user-images.githubusercontent.com/66746179/232772046-176004fc-e9b8-4dc5-99ae-88efeedc2be0.png)

![Screenshot from 2023-04-09 21-57-01](https://user-images.githubusercontent.com/66746179/230793877-da75803b-1569-4905-83f4-9289b6c07a7a.png)

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

# Styled()

Utility for creating styled components.

All the MUI components are styled with this `styled()` utility. This utility is built on top of the `styled()` module of `@mui/styled-engine` and provides additional features.

**Import path**. You can use the utility coming from the `@mui/system` package, or if you are using `@mui/material`, you can import it from `@mui/material/styles`. The difference is in the default `theme` that is used (if no theme is available in the React context).

### styled -> API

> styled(Component, [options])(styles) => Component

**Arguments**.

-   **Components**. The component that will be wrapped.

**Options**.

-   **shouldForwardProp**. _(prop:string) => bool[optional]_ . Indicates whether the `prop` should be forwarded to the **Component**.

-   **label**. _string[optional]_. The suffix of the style sheet. Useful for debugging.

-   **name**. _string[optional]_. The key used under `theme.components` for specifying `styleOverrides` and `variants`. Also used for generating the `label`.

-   **slot**. _string[optional]_. If `Root`, it automatically applies the theme's `variants`.

-   **overridesResolver**. _((props: object, styles: Record<string, styles>)) => styles[optional]_. Function that returns styles based on the props and the `theme.components[name].styleOverrides` object.

-   **skipVariantsResolver**. _(bool)_. Disables the automatic resolver for the `theme.components[name].variants`.

-   **skipSx**. _bool[optinal])_. Disables the `sx` prop on the component.

### Basic usage -> styled()

```js
import * as React from 'react';
import {styled} from '@mui/system';

const MyComponent = styled('div')({
    color:'gray',
    backgroundColor:'aliceblue',
    padding:8
});

export const BasicUsage(){
    return <MyComponent>Styled div</MyComponent>
}

```

#### Using the theme -> styled()

```js
import * as React from 'react';
import { styled } from '@mui/system';

const customTheme = createTheme({
    palette: {
        primary: {
            main: 'red',
            contrastText: 'white',
        },
    },
});

const MyThemeComponent = styled('div')(({ theme }) => ({
    color: theme.palette.primery.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
}));

export function ThemeUsage() {
    return (
        <ThemeProvider theme={customTheme}>
            <MyThemeProvider>Styled div with theme</MyThemeProvider>
        </ThemeProvider>
    );
}
```

### Custom Components

This example demostrates how you can use the `styled` API to create custom components, with the same capabilities as the core components.

```js
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

interface MyThemeComponentProps {
    color?: 'primary' | 'secondary';
    variant?: 'normal' | 'dashed';
}

const customTheme = createTheme({
    components: {
        MyThemeComponent: {
            styleOverrides: {
                root: {
                    color: 'darkslategray',
                },
                primary: {
                    color: 'darkblue',
                },
                secondary: {
                    color: 'darkred',
                    backgroundColor: 'pink',
                },
            },
            variants: [
                {
                    props: { variant: 'dashed', color: 'primary' },
                    style: {
                        border: '1px dashed darkblue',
                    },
                },
                {
                    props: { variant: 'dashed', color: 'secondary' },
                    style: {
                        border: '1px dashed darkred',
                    },
                },
            ],
        },
    },
});

const MyThemeComponent = styled('div',{
    shouldForwardProp: (prop) => prop !== 'color' && !== 'variant' && prop !== 'sx',    // Configure which props should be forwarded on DOM.
    name: 'MyThemeComponent',
    slot:'Root',
    overridesResolver:(props, styles) => [                                              // We are specifying here how the styleOverrides are
        styles.root,                                                                    // being applied based on props.
        props.color === 'primary' && styles.primary,
        props.color === 'secondary' && styles.secondary,
    ],
})<MyThemeComponentProps>(({theme}) => ({
    backgroundColor:'aliceblue',
    padding:theme.spacing(1)
}));

export function UsingOptions(){
    return(
        <ThemeProvider>
            <MyThemeComponent sx={{m:1}} color="primary" variant="dashed">
                Primary
            </MyThemeComponent>
            <MyThemeComponent sx={{m:1}} color="secondary">
                Secondary
            </MyThemeComponent>
        </ThemeProvider>
    )
}

```

### Removing features -> styled()

If you'd like to remove some of the MUI specific features, you can do it like this:

```js
const StyledComponent = styled(
    'div',
    {},
    {
        name: 'MuiStyled',
        slot: 'Root',
        // overridesResolver:(props, styles) => styles.root,    // disables theme.components[name].styleOverrides
        skipVariantsResolver: true, // disables theme.components[name].variants
        skipSx: true, // disables the sx prop
    }
);
```

### Create custom styled() utility

If you want to have a different default theme for the `styled()` utility, you can create your own version of it, using the `createStyled()` utility.

```js
import { createStyled, createTheme } from '@mui/system';

const defaultTheme = createTheme({
    // your custom theme values
});

export const styled = createStyled({ defaultTheme });
```

### style definition varies slightly

With `styled`:

```js
const MyStyledButton = styled('button')({
    padding: 1, // means 1px
});

// Patterns for how to use props differ
const MyStyledButton = styled('button')(props => ({
    backgroundColor: props.myBackgroundColor,
}));
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

## Grid

Layout grid that adapts to screen size and orientation, ensuring consistency across layouts.

The `grid` creates visual consistency between layouts while allowing flexibility acorss a wide variety of designs. MUI is based on a **12-column grid layout**.

> The `Grid` component shuldn't be consused with a data grid; it is closer to a layout grid.

### How it Works

The grid system is implemented with the `Grid` component:

-   It uses _Css's FlexibleBox module_ for high flexibility.

-   There are two types of layout: _containers_ and _items_.

-   Items widths are set in percentages, so they're always fluid and sized relative to their parent element.

-   Items have padding to create the spacing between individuals items.

-   There are five grid breakpoints: _xs_, _sm_, _md_, _lg_ and _xl_.

-   Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component when the viewport width satisfies the _breakpoints constraints_.

### Fuild grid

Fluid grid use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.

### Basic grid

Column widths are interger values _between 1 and 12_; they apply at any breakpoint and indicate how many columns are occupied by the component.

A value given to a breakpoint applies to all the other breakpoints wider than it (unless overriden, as you can read later in this page). `xs={12}` sizes a component to occupy the whole width regardless of its size.

```js
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacig={2}>
                <Grid item xs={8}>
                    <Item />
                </Grid>
                <Grid item xs={4}>
                    <Item />
                </Grid>
            </Grid>
        </Box>
    );
}
```

### Grid with multiple breakpoints

Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.

For example, `xs={12} sm={16}` sizes a component to occupy half of the viewport width(6 columns) when viewport width is 600 or more pixels.

For smaller viewports, the component fills all 12 available columns.

```js
<Grid container spacing={2}>
    <Grid item xs={6} md={8}>
        Item
    </Grid>
    <Grid item xs={6} md={4}>
        Item
    </Grid>
    <Grid item xs={6} md={4}>
        Item
    </Grid>
    <Grid item xs={6} md={8}>
        Item
    </Grid>
</Grid>
```

### Row and column spacing

The `rowSpacing` and `columnSpacing` props allow for specifying the row and column gaps independently. It's similar to the `row-gap` and `column-gap` properties of CSS grid.

```js
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
        1
    </Grid>
    <Grid item xs={6}>
        2
    </Grid>
    <Grid item xs={6}>
        3
    </Grid>
    <Grid item xs={6}>
        4
    </Grid>
</Grid>
```

### CSS Grid Layout

The `Grid` component is using CSS flexbox internally. But as seen below, you can easily use _the system_ and CSS grid to layout your pages.

```js
<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
    <Box gridColumn="span 8">Item</Box>
    <Box gridColumn="span 4">Item</Box>
    <Box gridColumn="span 4">Item</Box>
    <Box gridColumn="span 8">Item</Box>
</Box>
```

### System Props

As a CSS utility component, the Grid supports all `system` properties. You can use them as props directly on the component. For instance, a padding:

```js
<Grid item p={2}>
```
