import json

j = """
{
    "status": "OK",
    "RouteConfigs": [
        {
            "code": "reference",
            "title": "Справочники",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_reference_container",
                "remoteEntry": "app/reference/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/reference/logo.svg",
            "path": "reference",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "subject-assigment",
            "title": "",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_subject_assignment_container",
                "remoteEntry": "service/subject-assigment/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "",
            "path": "administration/subject-assigment",
            "internal": true,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "policy-management",
            "title": "",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_policy_managment_container",
                "remoteEntry": "service/policy-management/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "",
            "path": "administration/policy-management",
            "internal": true,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "role-management",
            "title": "",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_role_managment_container",
                "remoteEntry": "service/role-management/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "",
            "path": "administration/role-management",
            "internal": true,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "tasks",
            "title": "Задачи",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_tasks_container",
                "remoteEntry": "app/tasks/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/tasks/logo.svg",
            "path": "tasks",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "knowledge",
            "title": "Знания",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_knowledge_container",
                "remoteEntry": "app/knowledge/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/knowledge/logo.svg",
            "path": "knowledge",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "testing",
            "title": "Тестирование",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_pptm_ui_container",
                "remoteEntry": "app/testing/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/testing/logo.svg",
            "path": "testing",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "documents",
            "title": "Документы",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "ppar_ui",
                "remoteEntry": "app/documents/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/documents/logo.svg",
            "path": "documents",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "approvals",
            "title": "Согласования",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_approvals_ui_container",
                "remoteEntry": "app/approvals/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/approvals/logo.svg",
            "path": "approvals",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "incidents",
            "title": "Инциденты",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_incidents_container",
                "remoteEntry": "app/incidents/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/incidents/logo.svg",
            "path": "incidents",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "pprc",
            "title": "Релизы",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_sdlc_management_pprc_main_container",
                "remoteEntry": "app/pprc/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/pprc/logo.svg",
            "path": "pprc",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "ppcg",
            "title": "Изменения",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_sdlc_management_ppcg_main_container",
                "remoteEntry": "app/ppcg/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/ppcg/logo.svg",
            "path": "ppcg",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "catalog",
            "title": "Каталог",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_service_catalog_container",
                "remoteEntry": "app/catalog/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/catalog/logo.svg",
            "path": "catalog",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "ppqg",
            "title": "Контрольные точки",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_ppqg_container",
                "remoteEntry": "app/ppqg/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/ppqg/logo.svg",
            "path": "ppqg",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "sr",
            "title": "Запросы на обслуживание",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_servicerequest_container",
                "remoteEntry": "app/sr/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/sr/logo.svg",
            "path": "sr",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "sourcecode",
            "title": "Исходный код",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_ppsc_container",
                "remoteEntry": "app/sourcecode/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/sourcecode/logo.svg",
            "path": "sourcecode",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "dashboards",
            "title": "",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_monitoring_container",
                "remoteEntry": "app/dashboards/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "",
            "path": "dashboards",
            "internal": true,
            "enabled": true,
            "last_modified_date": "2023-10-17T14:26:54.399876Z"
        },
        {
            "code": "orchestration",
            "title": "CI/CD",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_ppor_container",
                "remoteEntry": "app/orchestration/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/orchestration/logo.svg",
            "path": "orchestration",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-20T10:35:19.607Z"
        },
        {
            "code": "ppbd",
            "title": "Дистрибутивы и Библиотеки",
            "is_public": false,
            "options": {
                "type": "module",
                "remoteEntry": "app/ppbd/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/ppbd/logo.svg",
            "path": "ppbd",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-20T10:35:19.607Z"
        },
        {
            "code": "ppwt",
            "title": "тестирование веб",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_ppwt_ui_container",
                "remoteEntry": "app/ppwt/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/ppwt/logo.svg",
            "path": "ppwt",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-13T10:06:05.319Z"
        },
        {
            "code": "loadtesting",
            "title": "Нагрузочное тестирование",
            "is_public": false,
            "options": {
                "type": "script",
                "remoteName": "sfera_pplt_container",
                "remoteEntry": "app/loadtesting/remoteEntry.js",
                "exposedModule": "microFrontend"
            },
            "icon": "app/loadtesting/logo.svg",
            "path": "loadtesting",
            "internal": false,
            "enabled": true,
            "last_modified_date": "2023-10-13T10:06:05.319Z"
        }
    ]
}
"""


res_json = json.loads(j)

print(res_json)
for i in res_json['RouteConfigs']:
    print(i['icon'].split("/")[1])