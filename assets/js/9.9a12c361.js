(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{187:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Now generate the Laratrust migration")]),e._v(" "),e._m(1),e._m(2),e._v(" "),e._m(3),s("p",[e._v("After the migration, five (or six if you use teams feature) new tables will be present:")]),e._v(" "),s("ul",[e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("li",[s("code",[e._v("role_user")]),e._v(" — stores "),s("a",{attrs:{href:"https://laravel.com/docs/eloquent-relationships#polymorphic-relations",target:"_blank",rel:"noopener noreferrer"}},[e._v("polymorphic"),s("OutboundLink")],1),e._v(" relations between roles and users.")]),e._v(" "),s("li",[s("code",[e._v("permission_role")]),e._v(" — stores "),s("a",{attrs:{href:"https://laravel.com/docs/eloquent-relationships#many-to-many",target:"_blank",rel:"noopener noreferrer"}},[e._v("many-to-many"),s("OutboundLink")],1),e._v(" relations between roles and permissions.")]),e._v(" "),s("li",[s("code",[e._v("permission_user")]),e._v(" — stores "),s("a",{attrs:{href:"https://laravel.com/docs/eloquent-relationships#polymorphic-relations",target:"_blank",rel:"noopener noreferrer"}},[e._v("polymorphic"),s("OutboundLink")],1),e._v(" relations between users and permissions.")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[this._v("#")]),this._v(" Migrations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("php artisan laratrust:migration\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It will generate the "),t("code",[this._v("<timestamp>_laratrust_setup_tables.php")]),this._v(" migration.\nYou may now run it with the artisan migrate command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("php artisan migrate\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("roles")]),this._v(" — stores role records.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("permissions")]),this._v(" — stores permission records.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("teams")]),this._v(" — stores teams records (Only if you use the teams feature).")])}],!1,null,null,null);t.default=a.exports}}]);