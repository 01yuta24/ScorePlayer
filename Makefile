test_FE:
	cd ./frontend && make test

lint_FE:
	cd ./frontend && make lint

test_e2e:
	cd ./e2e && make test

lint_e2e:
	cd ./e2e && make lint

test: test_FE test_e2e

lint : lint_FE lint_e2e