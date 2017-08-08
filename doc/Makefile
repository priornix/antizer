# Borrowed from https://github.com/funcool/buddy-auth/blob/master/doc/Makefile
all: doc

api:
	cd ..
	lein codox

clean:
	rm -rf dist

doc:
	asciidoctor -o dist/latest/index.html content.adoc

examples:
	cd .. && rsync -av --progress examples/resources/ doc/dist/latest/examples --exclude js/
	lein with-profile +examples-dist cljsbuild once

github:
	ghp-import -m "Generate documentation" -b gh-pages dist/
	git push origin gh-pages
