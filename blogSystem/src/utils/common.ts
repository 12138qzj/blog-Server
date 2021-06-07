function isPlainObject(v: any) {
  return !!v && Object === v.constructor;
}

class Cookie {
  get(name: string) {
    var nameEQ = name + '=', v;
    var ca = document.cookie.split('; ');
    for (var i in ca) {
      v = ca[i];
      if (v.indexOf(nameEQ) === 0) {
        return decodeURIComponent(v.replace(nameEQ, ''));
      }
    }

    return false;
  }

  set(name: any, value: any, options: any) {
    if (isPlainObject(name)) {
      Object.keys(name).forEach(v => this.set(v, name[v], value));
    } else {
      var opt = isPlainObject(options) ? options : { expires: options },
        expires = opt.expires !== undefined ? opt.expires : '',
        expiresType = typeof expires,
        opts = [];
      if (expiresType === 'string' && expires !== '')
        expires = new Date(expires);
      if (expiresType === 'number')
        expires = new Date(+new Date() + 1000 * 60 * 60 * 24 * expires);

      opts.push(name + '=' + encodeURIComponent(value));
      if (expires) opts.push('expires=' + expires.toGMTString());
      opts.push('path=' + (opt.path || '/'));
      if (opt.domain) opts.push('domain=' + opt.domain);
      if (opt.secure) opts.push('secure');
      document.cookie = opts.join('; ');
    }
  }

  clear(name: string) {
    return name ? this.remove(name) : this.remove(Object.keys(this.all()));
  }

  remove(names: any) {
    names = Array.isArray(names) ? names : Array.slice.call(arguments);
    return names.forEach((v: any) => this.set(v, '', -1));
  }

  all() {
    if (document.cookie === '') return {};
    var cookies = document.cookie.split('; '),
      item;
    return cookies.reduce((p, n) => {
      item = n.split('=');
      p[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
      return p;
    }, {});
  }
}

const cookieIns = new Cookie();
const cookie = function(name: any, value: any, options: any) {
  var args = arguments;
  if (args.length === 0) return cookieIns.all();
  if (args.length === 1 && name === null) return cookieIns.clear();
  if (args.length === 2 && !value) return cookieIns.clear(name);
  if (typeof name === 'string' && !value) return cookieIns.get(name);
  if (isPlainObject(name) || (args.length > 1 && name && value))
    return cookieIns.set(name, value, options);
  if (value === null) return cookieIns.remove(name);
  return cookieIns.all();
};
// 由于ES6生成的类和实例都不可遍历，但可以读取，可以采用下面的方法
Array('get', 'all', 'set', 'remove', 'clear').forEach(v => {
  cookie[v] = Cookie.prototype[v];
});

// 接口数据返回处理

const handleReturn = (res: any = {}) => {
  const { data: { data, errmsg, errno} } = res;
  return {
    data: data || [],
    errmsg: errmsg || '',
    errno
  }
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
const isExternal = (path: string) => {
  return /^(https?:|mailto:|tel:|http:)/.test(path)
}

export { cookie, handleReturn, isExternal };
