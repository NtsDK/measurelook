# Просмотр экспериментов

При выполнении научных исследований необходимо сохранять данные проведенных вычислительных экспериментов. 
Наивный подход это сохранение всей информации в неструктурированный текстовый файл. У этого подхода есть множество недостатков:
- чтобы понять что содержится в файле его нужно явно прочитать
- не фиксированный формат файла увеличивает время обращения к информации
- данные находящиеся в файле требуют постобработки как для визуализации, так и для любых других целей

Чтобы решить названные проблемы был разработан специальный формат файла и механизм визуализации.

# Measurelook формат

Результаты эксперимента сохраняются в JSON файл в следующем формате (версия 0.3.0): 
- meta, объект - описание проводимого эксперимента в произвольном формате.
- constantParams, массив - массив неизменяемых параметров алгоритма
  - name, строка - название параметра
  - units, строка - единицы измерения параметра
  - value, число или строка - значение константы
- changedParams, массив - массив изменяемых параметров алгоритма
  - name, строка - название параметра
  - units, строка - единицы измерения параметра
- measuredParams, массив - массив измеряемых параметров алгоритма
  - name, строка - название параметра
  - units, строка - единицы измерения параметра
  - Зафиксированный (прямой) параметр
    - type, "direct" - зафиксированный (прямой) параметр, реально измеренный параметр
  - Косвенный параметр
    - type, "indirect" - косвенный параметр, являющийся суммой нескольких прямых параметров
    - sumOf, массив строк - названия прямых параметров
- measures, объект - данные по каждому измерению. Хранятся по measureKey (см. пример)
  - measureKey, строка - уникальный ключ каждого измерения. Рекомендуется собирать его как набор всех изменяемых параметров + номер прогона.
  - passId, число - номер прогона
  - changedParams.name, число - значения всех изменяемых параметров, зафиксиованных на время прогона
  - measuredParams.name, число - значения всех измеренных параметров, полученных во время прогона
  - raw, объект - произвольные данные о прогоне, которые вы хотите сохранить. Например чтобы в будущем перепроверить значения измеренных параметров
- version, строка - версия формата. В систему встроен мигратор, автоматически обновляющий файлы в старом формате до нового для обеспечения обратной совместимости.
- name, строка - название эксперимента. Добавлено в формат, но в текущий момент не используется.
- timestamp, строка - время проведения эксперимента. Указывается в свободной форме. Добавлено в формат, но в текущий момент не используется.

[Пример файла](https://github.com/NtsDK/measurelook/wiki/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-measurelook)

# Measurelook просмотр

Для файлов указанного типа разработан просмотровщик в виде интерактивной веб-страницы.
Использование - откройте app.html в браузере.

Внимание! В текущий момент визуализатором поддерживается только один изменяемый параметр.

В комплекте с визуализатором идёт база с результатами эксперимента, который иллюстрирует основные функции просмотра.

Для загрузки своих данных нажмите кнопку "Загрузить базу из файла" в правом верхнем углу программы.

При загрузке база будет обновлена с помощью мигратора до актуального формата, если в этом есть необходимость.
После мигратора база валидируется с помощью JSON schema. При обнаружении проблем будет выведено сообщение об ошибке.
Поскольку в базе ошибок может быть найдено очень много, все они выводятся в консоль браузера в текущей реализации.

# Примеры

Вы можете выполнить примеры вычислительных экспериментов, возращающих результат в Measurelook формате.
Использование - откройте example.html в браузере и следуйте инструкциям.

# Развертывание

Ленивый вариант - открыть Measurelook с моего сайта http://trechkalov.com/measurelook/app.html

Автономный вариант - скачивать релиз, распаковывать, запустить app.html

# FAQ

В: Какой используется бэкенд?

О: Бэкенд не используется. В данном случае бэкенд это JSON объект в памяти, а DBMS это интерфейс для взаимодействия с ним.



# View experiments

When performing scientific research it is necessary to preserve the data of the computational experiments carried out.
The naive approach is to save all information in an unstructured text file. This approach has many shortcomings:
- To understand what is contained in the file, it must be explicitly read
- non-fixed file format increases the access time to information
- the data in the file requires post-processing for both visualization and any other purposes

To solve these problems, a special file format and visualization mechanism was developed.

# Measurelook format

The results of the experiment are saved in the JSON file in the following format (version 0.2.0):
- meta, object - description of the experiment in an arbitrary format.
- constantParams, array - array of unchanged parameters of the algorithm
  - name, string - name of the parameter
  - units, string - units of measurement of the parameter
  - value, number or string - the value of the constant
- changedParams, array - array of variable algorithm parameters
  - name, string - name of the parameter
  - units, string - units of measurement of the parameter
- measuredParams, array - array of measured parameters of the algorithm
  - name, string - name of the parameter
  - units, string - units of measurement of the parameter
  - The fixed (direct) parameter
    - type, "direct" - fixed (direct) parameter, actually measured parameter
  - Indirect parameter
    - type, "indirect" - an indirect parameter that is the sum of several direct parameters
    - sumOf, array of strings - names of direct parameters
- measures, object - data for each dimension. Store by measureKey (see example)
  - measureKey, string - the unique key of each dimension. It is recommended to collect it as a set of all parameters to be changed + run number.
  - passId, number - run number
  - changedParams.name, number - the values ​​of all the changed parameters, fixed for the run time
  - measuredParams.name, number - the values ​​of all the measured parameters received during the run
  - raw, object - arbitrary data about the run that you want to save. For example, in the future to recheck the values ​​of the measured parameters
- version, string - version of the format. The system has a built-in migrator that automatically updates files in the old format to the new one to ensure backward compatibility.

[Example file] (https://github.com/NtsDK/measurelook/wiki/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D1%84%D0 % B0% D0% B9% D0% BB% D0% B0-measurelook)

# Measurelook preview

For files of the specified type, the viewer is designed in the form of an interactive web page.
Use - open app.html in the browser.

Attention! At the moment, only one variable is supported by the visualizer.

Complete with the visualizer is the base with the results of the experiment, which illustrates the main viewing functions.

To download your data, click the "Download a database from a file" button in the upper right corner of the program.

When you download the database will be updated with the migrator to the current format, if necessary.
After the migrator, the database is validated using the JSON schema. If an error is detected, an error message will be displayed.
Since a lot can be found in the error database, they are all displayed in the browser console in the current implementation.

#Examples

You can run examples of computational experiments that return the result in the Measurelook format.
Use - open example.html in your browser and follow the instructions.

# Deployment

Lazy option - open Measurelook from my site http://trechkalov.com/measurelook/app.html

Standalone version - download the release, unpack, run app.html

# FAQ

Q: What is the backend used?

A: The backend is not used. In this case, the backend is a JSON object in memory, and DBMS is the interface for interacting with it.
