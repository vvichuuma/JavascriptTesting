

const capitalize = require('./weekly6.2');

test('capitalize should be defined', () => {
    expect(capitalize).toBeDefined();
})

test('should capitalize if more than one ele', () => {
    var sentences = ["hello", "old friend", "today", "mac and cheese"];
    var cSen = ["hello", "Old friend", "today", "Mac and cheese"];

    expect((capitalize(sentences))).toEqual(cSen);


})