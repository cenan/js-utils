function define(deps, mod) {
    window.Utils = mod();
}

test( "slugify", function() {
    equal(Utils.slugify("foo bar"), "foo-bar", "White space to hypen" );
    equal(Utils.slugify("foo  bar"), "foo-bar", "Multiple spaces collapse" );
    equal(Utils.slugify("FooBar"), "foobar", "Lowercases capital letters" );
    equal(Utils.slugify("f00bar"), "f00bar", "Numbers stay as numbers" );
    equal(Utils.slugify("ƒΩΩß@®"), "", "Special characters are removed" );
});