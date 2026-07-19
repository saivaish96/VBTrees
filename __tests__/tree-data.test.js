const treeData = require("../assets/data/VBTrees.json");

describe("VB Trees dataset", () => {
  test("contains tree records", () => {
    expect(Array.isArray(treeData)).toBe(true);
    expect(treeData.length).toBeGreaterThan(0);
  });

  test("tree records contain the required fields", () => {
    const firstTree = treeData[0];

    expect(firstTree).toHaveProperty("CommonName");
    expect(firstTree).toHaveProperty("ScientificName");
    expect(firstTree).toHaveProperty("Genus");
    expect(firstTree).toHaveProperty("Species");
  });

  test("common names are non-empty strings", () => {
    const invalidTrees = treeData.filter(
      (tree) =>
        typeof tree.CommonName !== "string" ||
        tree.CommonName.trim().length === 0
    );

    expect(invalidTrees).toHaveLength(0);
  });
});