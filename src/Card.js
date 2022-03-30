import React from 'react';
import './main'


const Card = ({ source }) => {
    return (
        
            <div className="card shadow-sm" data-price="350.95">
                <img src={`${source}`} className="card-img-top" width="100%" alt="borana" />
                <div className="card-body">
                    <h5 className="card-text">Own Mahoose from UltraVanilla as a unique digital asset!</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Attribute</th>
                                <th scope="col">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Vibes</th>
                                <td>100 / 100</td>
                            </tr>
                            <tr>
                                <th scope="row">Swag level</th>
                                <td>100 / 100</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="purchase-zone">
                        <h4 className="card-text"><strong>Price:</strong> 350.95 ETH</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary">Purchase this NFT</button>
                            </div>
                            <small className="text-muted progress"></small>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Card