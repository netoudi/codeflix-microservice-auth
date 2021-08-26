<#macro registrationLayout>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta
    name="robots"
    content="noindex, nofollow"
  >
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />
  <meta
    name="theme-color"
    content="#ffffff"
  />
  <meta
    name="description"
    content="Codeflix Authentication"
  />
  <link
    rel="icon"
    href="${url.resourcesCommonPath}/img/favicon.ico"
  />
  <title>${msg("loginTitle",(realm.displayName!''))}</title>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<#nested "scripts">
</body>
</html>
</#macro>
