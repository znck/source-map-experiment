import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue"

export function render(_ctx, _cache) {
  return (_ctx.condition)
    ? (_openBlock(), _createBlock("div", {
        key: 0,
        "data-test": _ctx.expr,
        role: "button"
      }, _toDisplayString(_ctx.expression), 9 /* TEXT, PROPS */, ["data-test"]))
    : _createCommentVNode("v-if", true)
}
