var my_zen_settings = {
	'html': {
		'abbreviations': {
			'jq': '<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>',
			'kissy': '<script type="text/javascript" src="http://a.tbcdn.cn/??s/kissy/1.1.6/kissy-min.js"></script>',
			'yui': '<script type="text/javascript" src="http://a.tbcdn.cn/tbra/1.0/tbra-aio.js"></script>',
			'a':'<a href="#|" target="_blank">',
			'a:mail':'<a href="mailto:|" target="_blank">',
			'a:link':'<a href="http://|" target="_blank">',
			'img':'<img src="imgs/img_|">'
		},
		'snippets': {
			'cc:ie8': '<!--[if gte IE 8]>\n\t${child}|\n<![endif]-->',
			'cc:ie9': '<!--[if gte IE 9]>\n\t${child}|\n<![endif]-->',
			'cc:html5':'<!--[if IE]>\n<style>\n/*html5*/\narticle,aside,dialog,footer,header,section,footer,nav,figure,menu{display:block;}\n</style>\n<script src="http://a.tbcdn.cn/p/fp/2011a/html5.js"></script>\n<![endif]-->'
		}
	},
	'css': {
		'snippets': {
			"@md": "@-moz-document url-prefix() {\n\t${child}|\n}",
			'bg+':'background:url(imgs/img_|) no-repeat 0 0 #fff;',
			'bgi':'background-image:url(imgs/img_|);',
			'bgc':'background-color:#fff;',
		}
	}
};