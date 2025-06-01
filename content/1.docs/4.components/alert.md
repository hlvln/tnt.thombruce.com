---
title: Alert
description: Alert messages with custom styles.
---

`TntAlert` is just a wrapper around Nuxt UI's `UAlert` and accepts all of the same props.

```vue
<TntAlert
  title="Title"
  description="This is an alert."
  variant="subtle"
/>
```

:tnt-alert{title="Title" description="This is an alert." variant="subtle"}

As well as this, `TntAlert` defines some custom properties for quickly and easily creating some commonly used alert types.

## Success

```vue
<TntAlert title="Work Saved" success />
```

:tnt-alert{title="Work Saved" success}

## Info

```vue
<TntAlert title="Coming Soon" info />
```

:tnt-alert{title="Coming Soon" info}

## Warning

```vue
<TntAlert title="Oops!" warning />
```

:tnt-alert{title="Oops!" warning}

## Error

```vue
<TntAlert title="Action Denied" error />
```

:tnt-alert{title="Action Denied" error}

## Large

```vue
<TntAlert title="Bigger Text and Icon" info large />
```

:tnt-alert{title="Bigger Text and Icon" info large}
