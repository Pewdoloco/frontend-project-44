# Установка зависимостей
install:
	npm ci 

#Запуск проекта
up: 
	node bin/brain-games.js

# Команда для проверки публикации пакета без фактической отправки
publish:
	npm	publish --dry-run

lint:
	npx eslint .