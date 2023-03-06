import { c as create_ssr_component, a as compute_rest_props, v as validate_component, b as add_attribute, l as createEventDispatcher, o as add_classes, p as compute_slots } from "../../chunks/index2.js";
import classNames from "classnames";
import { T as ToolbarButton } from "../../chunks/ToolbarButton.js";
import { F as Frame } from "../../chunks/Indicator.svelte_svelte_type_style_lang.js";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
    $$result,
    Object.assign({}, { name }, $$restProps, {
      class: classNames("ml-auto", $$props.class)
    }),
    {},
    {
      default: ({ svgSize }) => {
        return `<svg${add_attribute("class", svgSize, 0)} fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`;
      }
    }
  )}`;
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["dismissable", "accent"]);
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { dismissable = false } = $$props;
  let { accent = false } = $$props;
  let hidden = false;
  let divClass;
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0)
    $$bindings.accent(accent);
  divClass = classNames("p-4 text-sm", accent && "border-t-4 ", hidden, $$props.class);
  {
    {
      $$restProps.color = $$restProps.color ?? "blue";
      $$restProps.rounded = $$restProps.rounded ?? !accent;
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: divClass }, { role: "alert" }), {}, {
    default: () => {
      return `<div class="${"flex items-center"}">${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : ``}
    <div${add_classes(($$slots.icon ? "ml-3" : "").trim())}>${slots.default ? slots.default({}) : ``}</div>

    ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          class: "-mx-1.5 -my-1.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}</div>
  ${slots.extra ? slots.extra({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"p-8"}">${validate_component(Alert, "Alert").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="${"font-medium"}">Info alert!</span> Change a few things up and try submitting again.
	`;
    }
  })}</div>`;
});
export {
  Page as default
};
