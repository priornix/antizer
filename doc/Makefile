# Borrowed from https://github.com/funcool/buddy-auth/blob/master/doc/Makefile
all: doc

api:
	cd ..
	lein codox

clean:
	rm -rf dist

doc:
	mkdir -p dist/doc/
	asciidoctor -o dist/doc/latest/index.html content.adoc

examples:
	mkdir -p dist/examples/
	cd .. && rsync -av --progress examples/resources/ doc/dist/examples --exclude js/
	lein with-profile +examples-dist cljsbuild once

github: doc examples
	ghp-import -m "Generate documentation" -b gh-pages dist/
	git push origin gh-pages
