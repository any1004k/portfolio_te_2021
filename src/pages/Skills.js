import React from "react";
import "./ziehharmonika.css";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class Skills extends React.Component {
  componentDidMount() {
    var settings;
    window.$.fn.ziehharmonika = function (actionOrSettings, parameter) {
      if (
        typeof actionOrSettings === "object" ||
        actionOrSettings === undefined
      ) {
        // Default settings:
        settings = window.$.extend(
          {
            // To use a headline tag other than h3, adjust or overwrite ziehharmonika.css as well
            headline: "h3",
            // Give headlines a certain prefix, e.g. "♫ My headline"
            prefix: false,
            // Only 1 accordion can be open at any given time
            highlander: true,
            // Allow or disallow last open accordion to be closed
            collapsible: false,
            // Arrow down under headline
            arrow: true,
            // Opened/closed icon on the right hand side of the headline (either false or JSON containing symbols or image paths)
            collapseIcons: {
              opened: "&ndash;",
              closed: "+",
            },
            // Collapse icon left or right
            collapseIconsAlign: "right",
            // Scroll to opened accordion element
            scroll: true,
          },
          actionOrSettings
        );
      }
      // actions
      if (actionOrSettings == "open") {
        if (settings.highlander) {
          window.$(this).ziehharmonika("forceCloseAll");
        }
        var ogThis = window.$(this);
        window
          .$(this)
          .addClass("active")
          .next("div")
          .slideDown(400, function () {
            if (settings.collapseIcons) {
              window
                .$(".collapseIcon", ogThis)
                .html(settings.collapseIcons.opened);
            }
            // parameter: scroll to opened element
            if (parameter !== false) {
              smoothScrollTo(window.$(this).prev(settings.collapseIcons));
            }
          });
        return this;
      } else if (
        actionOrSettings == "close" ||
        actionOrSettings == "forceClose"
      ) {
        // forceClose ignores collapsible setting
        if (
          actionOrSettings == "close" &&
          !settings.collapsible &&
          window.$(settings.headline + '[className="active"]').length == 1
        ) {
          return this;
        }
        var ogThis = window.$(this);

        window
          .$(this)
          .removeClass("active")
          .next("div")
          .slideUp(400, function () {
            if (settings.collapseIcons) {
              window
                .$(".collapseIcon", ogThis)
                .html(settings.collapseIcons.closed);
            }
          });
        return this;
      } else if (actionOrSettings == "closeAll") {
        window.$(settings.headline).ziehharmonika("close");
      } else if (actionOrSettings == "forceCloseAll") {
        // forceCloseAll ignores collapsible setting
        window.$(settings.headline).ziehharmonika("forceClose");
      }

      if (settings.prefix) {
        window.$(settings.headline, this).attr("data-prefix", settings.prefix);
      }
      if (settings.arrow) {
        window
          .$(settings.headline, this)
          .append('<div className="arrowDown"></div>');
      }
      // if (settings.collapseIcons) {
      //   window.$(settings.headline, this).each(function (index, el) {
      //     if (window.$(this).hasClass("active")) {
      //       window
      //         .$(this)
      //         .append(
      //           '<div className="collapseIcon">' +
      //             settings.collapseIcons.opened +
      //             "</div>"
      //         );
      //     } else {
      //       window
      //         .$(this)
      //         .append(
      //           '<div className="collapseIcon">' +
      //             settings.collapseIcons.closed +
      //             "</div>"
      //         );
      //     }
      //   });
      // }
      if (settings.collapseIconsAlign == "left") {
        window.$(".collapseIcon, " + settings.headline).addClass("alignLeft");
      }

      window.$(settings.headline, this).click(function () {
        if (window.$(this).hasClass("active")) {
          window.$(this).ziehharmonika("close");
        } else {
          window.$(this).ziehharmonika("open", settings.scroll);
        }
      });
    };

    function smoothScrollTo(element, callback) {
      var time = 400;
      // window.$("html, body").animate(
      window.$(".container").animate(
        {
          scrollTop: window.$(element).offset().top,
        },
        time,
        callback
      );
    }
    // was in the html
    window.$(".ziehharmonika").ziehharmonika({
      collapsible: true,
      prefix: "★",
    });

    var _gaq = _gaq || [];
    _gaq.push(["_setAccount", "UA-36251023-1"]);
    _gaq.push(["_setDomainName", "jqueryscript.net"]);
    _gaq.push(["_trackPageview"]);

    (function () {
      var ga = document.createElement("script");
      ga.type = "text/javascript";
      ga.async = true;
      ga.src =
        ("https:" == document.location.protocol
          ? "https://ssl"
          : "http://www") + ".google-analytics.com/ga.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ga, s);
    })();
  }
  render() {
    // window.$(document).ready(function () {

    // });
    return (
      <>
        <div className="container container_skill">
          <h1> 보유기술</h1>
          <div className="ziehharmonika">
            <h3 data-prefix="★" className="">
              Framework <div className="arrowDown"></div>
              <div className="collapseIcon">+</div>
            </h3>
            <div>
              <p>
                ● Spring <br /> ● React
              </p>
            </div>
            <h3 data-prefix="★" className="">
              Language<div className="arrowDown"></div>
              <div className="collapseIcon">+</div>
            </h3>
            <div>
              <p>
                ● HTML
                <br /> ● CSS
                <br /> ● JavaScript
                <br /> ● JQuery
                <br /> ● node.js
                <br /> ● Java
                <br /> ● C<br /> ● C#
                <br /> ● Python
              </p>
            </div>
            <h3 data-prefix="★" className="">
              DBMS<div className="arrowDown"></div>
              <div className="collapseIcon">+</div>
            </h3>
            <div>
              <p>
                ● Workbench
                <br /> ● HeidiSQL
                <br /> ● SQL Server
                <br /> ● Firebase
              </p>
            </div>
            <h3 data-prefix="★" className="">
              IDE <div className="arrowDown"></div>
              <div className="collapseIcon">+</div>
            </h3>
            <div>
              <p>
                ● Visual Studio <br /> ● Visual Studio Code <br /> ● Eclipse{" "}
                <br /> ● Android Studio
              </p>
            </div>
            <h3 data-prefix="★" className="">
              Version Constrol <div className="arrowDown"></div>
              <div className="collapseIcon">+</div>
            </h3>
            <div>
              <p>
                ● Git <br /> ● Github
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
