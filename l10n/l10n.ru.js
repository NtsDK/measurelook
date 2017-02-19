/*Copyright 2016 Timofey Rechkalov <ntsdk@yandex.ru>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
   limitations under the License. */

var Dictionaries = {};
Dictionaries['ru'] = {
	"header": {
	    "page-title": "Measurelook",
	    "performance": "Производительность",
		"overview":"Обзор",
		"characters":"Участки",
		"stories":"Выборы",
		"adaptations":"Адаптации",
		"briefings":"Вводные",
		"timeline":"Хронология",
		"social-network":"Социальная сеть",
		"character-filter":"Фильтр",
		"open-database":"Загрузить базу из файла",
		"save-database":"Сохранить базу на диск",
		"create-database":"Создать новую базу",
		"docs":"Документация",
		"admins":"Администрирование",
		"chat":"Чат",
		"logout":"Выход",
		"logViewer":"Логи",
		"l10n":"Русский",
		"dictionary-icon":"ru",
        "briefing-preview" : "Предварительный просмотр",
        "briefing-export" : "Экспорт",
        "character-profile" : "Досье",
        "character-profile-configurer" : "Редактор досье",
        "master-story" : "Описание выборов",
        "story-events" : "События",
        "story-characters" : "Персонажи",
        "event-presence" : "Присутствие",
        "electors" : "Избиратели",
        "electionComparator" : "Сравнение выборов",
        "about" : "О программе",
	},
	"common": {
		"rename-from":"Переименовать из",
		"to":"в",
		"ok":"ОК",
		"add":"Добавить",
		"remove":"Удалить",
		"on": "на",
        "set-item-before" : "Перед '{0}'",
        "set-item-as-last" : "В конец",
	},
	"constant": {
	    "yes":"Да",
	    "no": "Нет",
        // social network subsets
	    "allObjects" : "Все объекты",
        "selectedCharacters": "Избранные персонажи",
        "selectedStories": "Избранные истории",
        // social network types
        //"simpleNetwork"            : "Простая сеть",
        "socialRelations"          : "Социальные связи",
        "characterPresenceInStory" : "Персонаж-участие-история",
        "characterActivityInStory" : "Персонаж-активность-история",
        // no group
        "noGroup": "Без групп" ,
        // activities
        "active"    : "Актив" ,
        "follower"  : "Спутник" ,
        "defensive" : "Защита" ,
        "passive"   : "Пассив" ,
        // number filter
        "ignore" : "Не важно",
        "greater" : "Больше",
        "equal" : "Равно",
        "lesser" : "Меньше",
        // adaptations labels
        "finishedText" : "Описание завершено",
        "finishedSuffix" : "(завершено)",
        "emptySuffix" : "(пусто)",
        // profile item types
        "text":"Текст",
        "string":"Строка",
        "enum":"Единственный выбор", // single choice
        "number":"Число",
        "checkbox":"Галочка",
	},
	"overview": {
		"descr":"Описание",
		"diagrams":"Диаграммы",
		"name":"Название",
		"pre-game-start-date":"Дата начала доигровых событий",
		"pre-game-end-date":"Дата окончания доигровых событий",
		"stats":"Статистика",
		"story-count":"Количество выборов",
		"character-count":"Количество участков",
		"event-count":"Количество событий",
		"user-count":"Количество пользователей",
		"first-event":"Первое событие",
		"last-event":"Последнее событие",
		"symbol-count":"Количество знаков в текстах (без пробелов)",
		"story-completeness":"Завершенность историй",
		"general-completeness":"Общая завершенность",
		"event-count-diagram":"Количество событий в историях",
		"character-count-diagram":"Количество персонажей в историях",
		"story-completeness-diagram":"Детальная завершенность историй",
		"object-belonging-diagrams":"Принадлежность объектов",
		"characters-diagram":"Персонажи",
		"stories-diagram":"Истории",
		"story-completeness-value":'{0}% ({1} из {2} историй)',
		"general-completeness-value": '{0}% ({1} из {2} адаптаций)',
		'consistency-problem-detected': "Проверка данных выявила нарушение целостности. " +
				"Список обнаруженных ошибок выведен в консоль бразера. См. инструменты разработки.",
		'last-save-time': 'Время последнего сохранения базы',
	},
	"characters": {
		"character-managing":"Управление участками",
		"character-name":"Номер/название участка",
		"new-character-name":"Новый номер/название участка",
		"profile":"Досье",
		"profile-editor":"Редактор досье",
		"characters":"Участки",
		"profile-item-name":"Название",
		"profile-item-type":"Тип",
		"profile-item-position":"Позиция",

		"move-item":"Переместить",
		"table-profile-item-name":"Название поля",
		"profile-item-default-value":"Значения",
		
		// character management errors
        "character-name-is-not-specified" : "Номер/название участка не указано",
        "new-character-name-is-not-specified" : "Новый номер/название участка не указано.",
        "names-are-the-same" : "Номер/название участка совпадают.",
        "character-name-already-used" : "Номер/название {0} уже используется.",
        "are-you-sure-about-character-removing" : "Вы уверены, что хотите удалить {0}? Все данные связанные с участком будут удалены безвозвратно.",

		// profile configurer errors
		"unknown-profile-item-type" : "Неизвестный тип поля: {0}",
		"profile-item-positions-are-equal": "Позиции полей совпадают",
		"are-you-sure-about-removing-profile-item": "Вы уверены, что хотите удалить поле профиля {0}? Все данные связанные с этим полем будут удалены безвозвратно.",
		"not-a-number":"Введено не число",
		"enum-item-cant-be-empty":"Значение поля с единственным выбором не может быть пустым",
		"new-enum-values-remove-some-old-values": "Новое значение единственного выбора удаляет предыдущие значения: {0}. Это приведет к обновлению существующих профилей. Вы уверены?",
		"profile-item-name-is-not-specified": "Название поля не указано",
		"profile-item-name-cant-be-name": "Название поля не может быть name",
		"such-name-already-used": "Такое имя уже используется",
		"are-you-sure-about-changing-profile-item-type":"Вы уверены, что хотите изменить тип поля профиля {0}? Все заполнение данного поле в досье будет потеряно.",
	},
	"character-filter": {
	    "show-profile-item":"Отобразить поле",
	    "filter":"Фильтр",
	    "results":"Результатов:",
	    "character":"Участок",

	},
	"stories":{
	    "stories":"Выборы",
	    "story-management":"Управление выборами",
	    "story-name":"Название выборов",
	    "new-story-name":"Новое название выборов",
        "event-creation": "Создание события",
        "event-name": "Название",
        "event-descr": "Описание события",
        "event-position": "Позиция",
        "event-management": "Управление событиями",
        "move-event": "Переместить",
        "clone-event": "Клонировать",
        "merge-events": "Объединить со следующим",
        "story-character-management": "Управление персонажами",
        "replace-character": "Заменить",
        "inventory": "Инвентарь",
        "name": "Имя",
        "activity": "Активность",
        "show-characters": "Отобразить персонажей",
        "event":"Событие",
        "remove-character-from-event-warning":"Вы уверены, что хотите удалить персонажа {0} из события '{1}'? У этого песонажа есть адаптация события, которая будет удалена безвозвратно.",
        //story management errors
        "story-name-is-not-specified" : "Название выборов не указано.",
        "new-story-name-is-not-specified" : "Новое имя не указано.",
        "names-are-the-same" : "Имена совпадают.",
        "story-name-already-used" : "Имя {0} уже используется.",
        "are-you-sure-about-story-removing" : "Вы уверены, что хотите удалить выборы {0}? Все данные связанные с историей будут удалены безвозвратно.",
	},
	"utils":{
	    "close-page-warning": "Убедитесь, что сохранили данные. После закрытия страницы все несохраненные изменения будут потеряны.",
	    "new-base-warning": "Вы уверены, что хотите создать новую базу? Все несохраненные изменения будут потеряны.",
	    "base-file-loading-error": "Ошибка при загрузке файла"
	}, 
    "log-viewer" : {
        "page" : "Страница",
        "date" : "Дата",
        "user" : "Пользователь",
        "action" : "Действие",
        "params" : "Параметры",
    }
};

