
# -*- coding: utf-8 -*-
{
    'name': 'Supervisorio Steriliza Dashboard',
    'version': '1.0',
    'summary': 'Dashboar Supervisório das máquinas de Limpeza e esterilização',
    'description': 'Descrição detalhada do módulo',
    'author': 'Afonso Carvalho',
    'depends': ['steril_supervisorio'],
    'sequence':-1,
    "qweb": [
        
    ],
    'data': [
        'views/supervisorio_dashboard_views.xml',
        'views/supervisorio_menu_views.xml',
    ],
    'assets':{
        'web.assets_backend':[
            'steril_supervisorio_dashboard/static/src/components/steril_supervisorio_dashboard_view/*.xml',
            'steril_supervisorio_dashboard/static/src/components/steril_supervisorio_dashboard_view/*.js',
            'steril_supervisorio_dashboard/static/src/components/steril_supervisorio_dashboard_view/*.scss',
            'steril_supervisorio_dashboard/static/src/components/kpi_card/*.xml',
            'steril_supervisorio_dashboard/static/src/components/kpi_card/*.js',
            'steril_supervisorio_dashboard/static/src/components/chart_renderer/*.js',
            'steril_supervisorio_dashboard/static/src/components/chart_renderer/*.xml',
            'steril_supervisorio_dashboard/static/src/js/*.js',
            'steril_supervisorio_dashboard/static/src/scss/*.scss',
            'steril_supervisorio_dashboard/static/src/xml/*.xml',

        ],

    },
    'installable': True,
    'application': False,
}
