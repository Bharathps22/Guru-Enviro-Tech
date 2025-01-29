import React from 'react'

function MitLicense() {
  return (
    <div><main className="app-main">
  {/*begin::App Content Header*/}
  <div className="app-content-header">
    {/*begin::Container*/}
    <div className="container-fluid">
      {/*begin::Row*/}
      <div className="row">
        <div className="col-sm-6"><h3 className="mb-0">License</h3></div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-end">
            <li className="breadcrumb-item"><a href="#">Docs</a></li>
            <li className="breadcrumb-item active" aria-current="page">License</li>
          </ol>
        </div>
      </div>
      {/*end::Row*/}
    </div>
    {/*end::Container*/}
  </div>
  {/*end::App Content Header*/}
  {/*begin::App Content*/}
  <div className="app-content">
    {/*begin::Container*/}
    <div className="container-fluid">
      <p>
        AdminLTE is an open source project that is licensed under the
        <a href="https://opensource.org/licenses/MIT">MIT license</a>. This allows you to do
        pretty much anything you want as long as you include the copyright in “all copies or
        substantial portions of the Software.” Attribution is not required (though very much
        appreciated).
      </p>
      <h5 className="text-bold text-dark mt-3">
        What You Are <span className="text-success">Allowed</span> To Do With AdminLTE
      </h5>
      <ul>
        <li>Use in commercial projects.</li>
        <li>Use in personal/private projects.</li>
        <li>Modify and change the work.</li>
        <li>Distribute the code.</li>
        <li>
          Sublicense: incorporate the work into something that has a more restrictive license.
        </li>
      </ul>
    </div>
    {/*end::Container*/}
  </div>
  {/*end::App Content*/}
</main>
</div>
  )
}
export default MitLicense;
