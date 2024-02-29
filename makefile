# Define variables
CHAT_API_DIR := ./Chat/api/
CHAT_INDEX := $(CHAT_API_DIR)index.js

# Targets and recipes
.PHONY: chat-install chat-fix chat-dev chat-prod

chat-install:
	npm install $(CHAT_API_DIR)

chat-fix:
	npm audit --fix $(CHAT_API_DIR)

chat-dev:
	cd $(CHAT_API_DIR) && npm run dev

chat-prod:
	cd $(CHAT_API_DIR) && npm start

install-package:
	cd $(CHAT_API_DIR) && npm install $(PACKAGE_NAME)