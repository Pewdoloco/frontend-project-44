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

# Команды для запуска игр
brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-games:
	node bin/brain-games.js

brain-gcd:
	node bin/brain-gcd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js