# Установка зависимостей
install:
	npm ci 

#Запуск проекта
up: 
	node bit/brain-games.js

# Команда для проверки публикации пакета без фактической отправки
publish:
	npm	publish --dry-run