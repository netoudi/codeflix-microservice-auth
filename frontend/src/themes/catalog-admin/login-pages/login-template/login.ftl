<#import "layout.ftl" as layout>
<@layout.registrationLayout title=msg("doLogIn"); section>
  <#if section = 'scripts'>
    <script type="text/javascript">
      var pageProps = {
        loginEnabled: ${realm.password?string},
        loginAction: '${url.loginAction?no_esc}',
        <#if usernameEditDisabled??>
          usernameEditDisabled: true,
        <#else>
          usernameEditDisabled: false,
        </#if>
        <#if !realm.loginWithEmailAllowed>
          usernameLabel: '${msg("username")}',
        <#elseif !realm.registrationEmailAsUsername>
          usernameLabel: '${msg("usernameOrEmail")}',
        <#else>
          usernameLabel: '${msg("email")}',
        </#if>
        usernameValue: '${(login.username!'')}'
      }
    </script>
    <%= htmlWebpackPlugin.tags.bodyTags %>
  </#if>
</@layout.registrationLayout>
