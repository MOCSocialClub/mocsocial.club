(()=>{"use strict";(function(){jQuery(document).ready((function(t){let e,n,a;return a=null!=(n=window.wc_payment_gateway_token_editor)?n:{},t(".sv_wc_payment_gateway_token_editor").each((function(){let e;return e=t(this).find("tr.token"),0===e.length?t(this).find("tr.no-tokens").show():t(this).find("tr.no-tokens").hide()})),t(".sv_wc_payment_gateway_token_editor").on("click",'.button[data-action="remove"]',(function(n){let o,r,s;if(n.preventDefault(),confirm(a.actions.remove_token.ays))return r=t(this).closest("table"),r.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),r.find(".error").remove(),s=t(this).closest("tr"),s.hasClass("new-token")?s.remove():(o={action:"wc_payment_gateway_"+r.data("gateway-id")+"_admin_remove_payment_token",user_id:t(this).data("user-id"),token_id:t(this).data("token-id"),payment_token_id:t(this).data("payment-token-id"),security:a.actions.remove_token.nonce},t.post(a.ajax_url,o).done((function(n){return n.success?(t(s).remove(),0===r.find("tr.token").length?r.find("tr.no-tokens").show():void 0):e(r,n.data)})).fail((function(t,n,a){return e(r,n+": "+a)})).always((function(){return r.unblock()})))})),t("table.sv_wc_payment_gateway_token_editor").on("click",'.button[data-action="add-new"]',(function(e){let n,o,r,s;return e.preventDefault(),s=t(this).closest("table"),s.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),n=s.find("tbody.tokens"),o=n.find("tr.token").length,r={action:"wc_payment_gateway_"+s.data("gateway-id")+"_admin_get_blank_payment_token",index:o+1,security:a.actions.add_token.nonce},t.post(a.ajax_url,r,(function(t){return!0===t.success&&n.append(t.data),s.find("tr.no-tokens").hide(),s.unblock()}))})),t("table.sv_wc_payment_gateway_token_editor").on("click",'.button[data-action="refresh"]',(function(n){let o,r,s,i;return n.preventDefault(),i=t(this).closest("table"),i.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),i.find(".error").remove(),o=i.find("tbody.tokens"),r=o.find("tr.token").length,s={action:"wc_payment_gateway_"+i.data("gateway-id")+"_admin_refresh_payment_tokens",user_id:t(this).data("user-id"),security:a.actions.refresh.nonce},t.post(a.ajax_url,s).done((function(t){return t.success?null!=t.data?(i.find("tr.no-tokens").hide(),o.html(t.data)):(o.empty(),i.find("tr.no-tokens").show()):e(i,t.data)})).fail((function(t,n,a){return e(i,n+": "+a)})).always((function(){return i.unblock()}))})),t("table.sv_wc_payment_gateway_token_editor").on("click",'.sv-wc-payment-gateway-token-editor-action-button[data-action="save"]',(function(e){let n,o,r,s;return o=t(this).closest("table"),n=o.find("tfoot th"),o.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),n.find(".error, .success").remove(),s=o.find('tbody.tokens tr.token input[type="text"]'),r=!1,s.each((function(s){let i,c,d;if(t(this).removeClass("error"),d=t(this).val(),c=t(this).prop("required"),i=t(this).attr("pattern"),c||d)return!d.match(i)||c&&!d?(e.preventDefault(),t(this).addClass("error"),r||(n.prepend('<span class="error">'+a.actions.save.error+"</span>"),t(this).focus(),r=!0),o.unblock()):void 0}))})),t("select#customer_user, select#_payment_method").change((function(){var e=t("select#customer_user").val();if("square_credit_card"===t("select#_payment_method").val()&&!isNaN(e)){var n={action:"woocommerce_subscription_get_user_id_and_token",user_id:e,security:a.actions.get_token.nonce};t.ajax({url:a.ajax_url,data:n,type:"POST",success:function(e){if(e.success){t(".order_data_column .edit_address").filter(":visible").trigger("click");var{customer_id:n,token:a}=e.data||{},o=t('[name="_payment_method_meta[square_credit_card][post_meta][_wc_square_credit_card_payment_token]"]'),r=t('[name="_payment_method_meta[square_credit_card][post_meta][_wc_square_credit_card_customer_id]"]');n&&r.val()!==n&&(r.val(n),o.val(a))}}})}})),e=function(t,e,n){return null==n&&(n=""),console.error(e),n||(n=a.i18n.general_error),t.find("th.actions").prepend('<span class="error">'+n+"</span>")}}))}).call(void 0)})();