import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <section className="contact">
        <div className="container   ">
          <form action="mail.php" method="post">
            <div className="card border-primary rounded-0 ">
              <div className="card-header p-0">
                <div className="bg-info text-white text-center py-2">
                  <h3><i className="fa fa-envelope" /> Contact us</h3>
                  <p className="m-0">
                    we are happy to help you</p>
                </div>
              </div>
              <div className="card-body p-3">
                {/*Body*/}
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-user text-info" /></div>
                    </div>
                    <input type="text" className="form-control" id="nombre" name="nombre" placeholder=" user name" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-envelope text-info" /></div>
                    </div>
                    <input type="email" className="form-control" id="nombre" name="email" placeholder="@gmail.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-comment text-info" /></div>
                    </div>
                    <textarea className="form-control" placeholder="reviews" required defaultValue={""} />
                  </div>
                </div>
                <div className="text-center">
                  <a href="/" type="submit" defaultValue="Enviar" className="btn btn-info btn-block rounded-0 py-2"  >Gửi</a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <hr />
      </section>
      
    )
  }
}
