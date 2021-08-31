<#macro registrationLayout title="">
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
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <title>${msg("loginTitle",(realm.displayName!''))}</title>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<script type="text/javascript">
  var layoutProps = {
    <#--loginTitle: '${kcSanitize(msg("loginTitleHtml",(realm.displayNameHtml!'')))?no_esc}',-->
    title: '${title}',
    i18nEnabled: ${realm.internationalizationEnabled?string},
    <#if realm.internationalizationEnabled && locale.supported?size gt 1>
    locale: {
      currentLocale: '${locale.current}',
      locales: [
        <#list locale.supported as l>
        {
          label: '${l.label}',
          url: '${l.url?no_esc}'
        },
        </#list>
      ]
    },
    </#if>
  };
</script>
<#nested "scripts">
</body>
</html>
</#macro>
