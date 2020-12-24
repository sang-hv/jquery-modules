const Admin = (function () {
    let modules = {};

    modules.deleteAdmin = function (element) {
                let id = element.attr('data-id');
                let name = element.attr('data-name');
                $('.modal-footer #admin_id').val(id);
                $('.modal-header #admin_name').text(name)
    };

    modules.editAdmin = function (element) {
        element.attr('disabled', true);
        $('#form-create-admin').submit();
    }

    modules.trimInput = function (element, name) {
        $("input[name='"+ name +"']").val($("input[name='"+name+"']").val().trim());
    }

    return modules;
}(window.jQuery, window, document));



$(document).ready(function () {
    $('#btn-add-admin').on('click', function () {
        Common.blockDuplicateSubmit($(this), $('#form-create-admin'));
    });

    $('.btn-delete').on('click', function () {
        Admin.deleteAdmin($(this));
    });

    $('#btn-edit-admin').on('click', function () {
        Admin.editAdmin($(this))
    })

    $('.full-name').on('change', function () {
        Admin.trimInput($(this), "full_name")
    })

    $('.short-name').on('change', function () {
        Admin.trimInput($(this), "short_name")
    })

    $('.login-id').on('change', function () {
        Admin.trimInput($(this), "login_id")
    })

    $('.password').on('change', function () {
        Admin.trimInput($(this), "password")
    })

    $('.password_confirm').on('change', function () {
        Admin.trimInput($(this), "password_confirm")
    })

    $('.email').on('change', function () {
        Admin.trimInput($(this), "email")
    })
});
