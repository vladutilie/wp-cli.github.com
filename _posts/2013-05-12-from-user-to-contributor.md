---
layout: post
title: From User To Contributor
author: scribu
---
If you've installed WP-CLI using the `installer.sh` script, as suggested on the [front page](/), you already have everything you need to start debugging and hacking on WP-CLI.

### Poking around the source code

First, let's find out where all the PHP files are:

```
$ wp --info
PHP binary:	/usr/local/Cellar/php54/5.4.12/bin/php
PHP version:	5.4.12
php.ini used:	/usr/local/etc/php/5.4/php.ini
wp-cli root:	/Users/User/.composer/vendor/wp-cli/wp-cli/php/
wp-cli config:
wp-cli version:	0.10.0-alpha
```

We see the full path, called `wp-cli root`; let's go there:

```
$ cd /Users/User/.composer/vendor/wp-cli/wp-cli/php/
```

### Proposing a change

Say you looked at the code and fixed a bug or made an improvement.

The neat part is that the wp-cli directory is already a git clone:

```
$ git remote -v
composer	git://github.com/wp-cli/wp-cli.git (fetch)
composer	git://github.com/wp-cli/wp-cli.git (push)
origin	git://github.com/wp-cli/wp-cli.git (fetch)
origin	git@github.com:wp-cli/wp-cli.git (push)
```

So, all you have to do is fork [wp-cli/wp-cli][1] on Github and add it as a remote:

```
$ git remote add scribu git@github.com:scribu/wp-cli.git
```

Now, you're free to create a branch, push it to your fork:

```
$ git checkout -b foo-fix
$ git commit -am "Fixed FOO behaving incorrectly because of reasons."
$ git push -u scribu foo-fix
```

... and open a pull request.

[1]: https://github.com/wp-cli/wp-cli
