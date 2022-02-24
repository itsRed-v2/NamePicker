describe("utils.js", function() {
	describe("#moveInArray", function() {
		it("ne fais rien si l'offset est à 0", function() {
			let array = [ "a", "b", "c", "d", "e" ];
			moveInArray(array, 1, 0);
			chai.expect(array).to.eql([ "a", "b", "c", "d", "e" ]);
		});
		it("avance un élément dans un tableau", function() {
			let array = [ "a", "b", "c", "d", "e" ];
			moveInArray(array, 1, 2);
			chai.expect(array).to.eql([ "a", "c", "d", "b", "e" ]);
		});
		it("envoie une élément au bout du tableau", function() {
			let array = [ "a", "b", "c", "d", "e" ];
			moveInArray(array, 1, 50);
			chai.expect(array).to.eql([ "a", "c", "d", "e", "b" ]);
		});
		it("recule un élément dans un tableau", function() {
			let array = [ "a", "b", "c", "d", "e" ];
			moveInArray(array, 3, -2);
			chai.expect(array).to.eql([ "a", "d", "b", "c", "e" ]);
		});
		it("envoie une élément au début du tableau", function() {
			let array = [ "a", "b", "c", "d", "e" ];
			moveInArray(array, 4, -50);
			chai.expect(array).to.eql([ "e", "a", "b", "c", "d" ]);
		});
		it("n'avance pas le dernier élément", function() {
			let array = [ "a", "b", "c", "d", "e" ];
			moveInArray(array, 4, 1);
			chai.expect(array).to.eql([ "a", "b", "c", "d", "e" ]);
		});
		it("ne recule pas le premier élément", function() {
			let array = [ "a", "b", "c", "d", "e" ];
			moveInArray(array, 0, -1);
			chai.expect(array).to.eql([ "a", "b", "c", "d", "e" ]);
		});
	});
});