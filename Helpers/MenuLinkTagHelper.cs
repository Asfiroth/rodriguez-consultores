using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Text;

namespace rodriguez_consultores.Helpers
{
    [HtmlTargetElement("menulink", Attributes = "controller-name, action-name, menu-text")]
    public class MenuLinkTagHelper : TagHelper
    {
        public string ControllerName { get; set; }
        public string ActionName { get; set; }
        public string MenuText { get; set; }

        [ViewContext]
        public ViewContext ViewContext { get; set; }

        public IUrlHelperFactory _UrlHelper { get; set; }

        public MenuLinkTagHelper(IUrlHelperFactory urlHelper)
        {
            _UrlHelper = urlHelper;
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            StringBuilder sb = new StringBuilder();

            var urlHelper = _UrlHelper.GetUrlHelper(ViewContext);

            string menuUrl = urlHelper.Action(ActionName, ControllerName);

            output.TagName = "a";
            output.Attributes.Add("href", $"{menuUrl}");
            output.Attributes.Add("title", MenuText);
            output.Content.SetContent(MenuText);

            var routeData = ViewContext.RouteData.Values;
            var currentController = routeData["controller"];
            var currentAction = routeData["action"];

            if (String.Equals(ActionName, currentAction as string, StringComparison.OrdinalIgnoreCase)
                && String.Equals(ControllerName, currentController as string, StringComparison.OrdinalIgnoreCase))
            {
                output.Attributes.Add("class", "item active");
            }else{
                output.Attributes.Add("class", "item");
            }
        }
    }
}