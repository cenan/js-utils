function define(deps, mod) {
    window.Utils = mod();
}

test( "slugify", function() {
    ok(Utils.slugify("foo bar") === "foo-bar", "White space to hypen" );
    ok(Utils.slugify("foo  bar") === "foo-bar", "Multiple spaces collapse" );
    ok(Utils.slugify("FooBar") === "foobar", "Lowercases capital letters" );
    ok(Utils.slugify("F00Bar") === "f00bar", "Numbers stay as numbers" );
    ok(Utils.slugify("f00bar") === "f00bar", "Numbers stay as numbers" );
    ok(Utils.slugify("ƒΩΩß@®") === "", "Special characters are removed" );
});