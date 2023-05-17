import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import Modal from 'react-modal';
import { HiOutlineX } from 'react-icons/hi';
import './HomePage.scss';
import './Modal.scss';

const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent background
    },
    content: {
        left: '0',
        border: 'none',
        right: '0',
        bottom: '0',
        margin: 'auto',
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    close: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        color: '#fff'
    }
};

const HomePage = () => {
    const [propertyType, setPropertyType] = useState('Buy');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setModalIsOpen(true);
    };

    const closeModal = (e) => {
        e.preventDefault();
        setModalIsOpen(false);
    };

    return (
        <div className="homepage">
            <div className="content">
                <h1>Find the perfect home.
                </h1>
                <p className="search-text">
                    Discover your dream sanctuary amidst endless possibilities.
                </p>
                <form className="search">
                    <div className="form-group">
                        <div className="form-rads">
                            <div className="rads">
                                <div className="check">
                                    <button
                                        type="button"
                                        className={propertyType === 'Buy' ? 'active' : ''}
                                        onClick={() => setPropertyType('Buy')}
                                    >
                                        Buy
                                    </button>
                                    <button
                                        type="button"
                                        className={propertyType === 'Rent' ? 'active' : ''}
                                        onClick={() => setPropertyType('Rent')}
                                    >
                                        Rent
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-inputs">
                            <div className="input-text">
                                <div className="location">
                                    <label>Enter location</label>
                                    <input className="form-1" type="text" placeholder="Search Location" />
                                </div>
                                <div className="unit-type">
                                    <label>Unit type</label>
                                    <select className="select" name="propeties" id="propeties">
                                        <option value="any">Any</option>
                                        <option value="1bd">1 Bedroom</option>
                                        <option value="2bd">2 Bedroom</option>
                                        <option value="3bd">3 Bedroom</option>
                                        <option value="4bd">4 Bedroom</option>
                                        <option value="lofy">Loft</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-slider">
                                <label>Price Range</label>
                                <ReactSlider
                                    className="horizontal-slider"
                                    thumbClassName="example-thumb"
                                    trackClassName="example-track"
                                    defaultValue={[0, 100]}
                                    ariaLabel={['Lower thumb', 'Upper thumb']}
                                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                    pearling
                                    minDistance={10}
                                />
                            </div>

                            <div className="radio">
                                <button type="submit">
                                    Search
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
                <button className="search-mobile" onClick={openModal}>
                    Search Properties Here
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={modalStyles}
                >
                    <form className="search-modal">
                        <div className="form-modal">
                            <div className="modal-rads">
                                <div className="modalrads">
                                    <div className="modal-check">
                                        <button
                                            type="button"
                                            className={propertyType === 'Buy' ? 'active' : ''}
                                            onClick={() => setPropertyType('Buy')}
                                        >
                                            Buy
                                        </button>
                                        <button
                                            type="button"
                                            className={propertyType === 'Rent' ? 'active' : ''}
                                            onClick={() => setPropertyType('Rent')}
                                        >
                                            Rent
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-inputs">
                                <div className="modal-text">
                                    <div className="modal-location">
                                        <label>Enter location</label>
                                        <input className="form-modal" type="text" placeholder="Search Location" />
                                    </div>
                                    <div className="unit-modal">
                                        <label>Unit type</label>
                                        <select className="select-modal" name="propeties" id="propeties">
                                            <option value="any">Any</option>
                                            <option value="1bd">1 Bedroom</option>
                                            <option value="2bd">2 Bedroom</option>
                                            <option value="3bd">3 Bedroom</option>
                                            <option value="4bd">4 Bedroom</option>
                                            <option value="loft">Loft</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-slider">
                                    <label>Price Range</label>
                                    <ReactSlider
                                        className="horizontal-slider"
                                        thumbClassName="example-thumb"
                                        trackClassName="example-track"
                                        defaultValue={[0, 100]}
                                        ariaLabel={['Lower thumb', 'Upper thumb']}
                                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                        pearling
                                        minDistance={10}
                                    />
                                </div>

                                <div className="modal-radio">
                                    <button type="submit">
                                        Search
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                    <HiOutlineX style={modalStyles.close} onClick={closeModal} />
                </Modal>
            </div>
        </div>
    )
}

export default HomePage