'use strict';

// runtime/src/rsc-shim.ts
var NO_OP_SELF_RETURN = (value) => value;
var reset = NO_OP_SELF_RETURN;
var registerMetadata = NO_OP_SELF_RETURN;
var init = NO_OP_SELF_RETURN;
var useCapture = NO_OP_SELF_RETURN;
var useCount = NO_OP_SELF_RETURN;
var $$ = NO_OP_SELF_RETURN;
var MillionLintProvider = (props) => props.children;

exports.$$ = $$;
exports.MillionLintProvider = MillionLintProvider;
exports.init = init;
exports.registerMetadata = registerMetadata;
exports.reset = reset;
exports.useCapture = useCapture;
exports.useCount = useCount;
