import ListComments from "./list.coments"
import AddComment from "./add.comment"

const Comments = () => {
    return(
        <div className="col-12 col-lg-8 col-xl-8">
            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                <div className="row">
                    <div className="col-12">
                        <div className="comments">
                            <ListComments />

                            <AddComment />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments